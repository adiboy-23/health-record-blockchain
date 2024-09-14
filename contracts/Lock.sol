// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MedicalRecords {

    struct Patient {
        string patientName;
        uint age;
        string gender;
        string disease;
        string contactNumber;
        string bloodGroup;
    }

    mapping(address => Patient) public patients;

    event PatientInfoStored(address indexed patientAddress, string patientName, uint age, string gender, string disease, string contactNumber, string bloodGroup);

    function storePatientInfo(
        string memory _patientName,
        uint _age,
        string memory _gender,
        string memory _disease,
        string memory _contactNumber,
        string memory _bloodGroup
    ) public {
        patients[msg.sender] = Patient(_patientName, _age, _gender, _disease, _contactNumber, _bloodGroup);
        emit PatientInfoStored(msg.sender, _patientName, _age, _gender, _disease, _contactNumber, _bloodGroup);
    }

    function getPatientInfo(address _patientAddress) public view returns (Patient memory) {
        return patients[_patientAddress];
    }
}