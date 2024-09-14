"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for client-side routing in the app directory
import { ethers } from "ethers";
import MedicalRecords from "../artifacts/contracts/Lock.sol/MedicalRecords.json"; // Adjust the path as necessary
import { Vortex } from "./components/ui/vortex";

const CONTRACT_ADDRESS = "YOUR_DEPLOYED_CONTRACT_ADDRESS";

export function VortexDemo() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  // Ensuring that the component is rendered client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Return nothing until client-side is mounted

  // Delete function to wipe off user data from the blockchain
  const handleDeleteRecord = async () => {
    if (!window.ethereum) {
      alert("MetaMask is required to use this application!");
      return;
    }

    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(CONTRACT_ADDRESS, MedicalRecords, signer);

      // Assuming there is a function in your contract to delete the patient record
      const tx = await contract.deletePatientInfo(); // Adjust the function name according to your smart contract
      await tx.wait();

      alert("Your medical record has been successfully deleted!");
    } catch (error) {
      console.error("Error deleting the medical record:", error);
      alert("Failed to delete the record. Please try again.");
    }
  };

  // Update function to take the user to the update page (/info route)
  const handleUpdateRecord = () => {
    router.push("/info"); // Navigate to the /info page
  };

  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          The hell is this?
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          This is your medical data on blockchain. What do you want to do now, you can choose either the "RED" pill or the "BLUE" pill.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
            onClick={handleDeleteRecord}>
            Delete your record
          </button>
          <button
            className="px-4 py-2 bg-red-600 hover:bg-red-700 transition duration-200 rounded-lg text-white"
            onClick={handleUpdateRecord}>
            Update your record
          </button>
        </div>
      </Vortex>
    </div>
  );
}