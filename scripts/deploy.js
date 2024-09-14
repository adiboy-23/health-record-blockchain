// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  // Compile the contract
  await hre.run('compile');

  // Get the contract factory
  const MedicalRecords = await hre.ethers.getContractFactory("MedicalRecords");
  
  // Deploy the contract
  const medicalRecords = await MedicalRecords.deploy();

  await medicalRecords.deployed();

  console.log("MedicalRecords deployed to:", medicalRecords.address);
}

// Handle errors and execute the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });