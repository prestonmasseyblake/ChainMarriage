// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
contract Marriage {
    uint256 marriageCount;  
    event Marry(address originator, address spouse, string originatorName,  
    uint256 timestamp, string spouseName);
    struct MarriageStruct {
        address originator;
        address spouse;
        string originatorName;
        uint256 timestamp; 
        string spouseName;
    }
    MarriageStruct[] marriages;

    function addToBlockchain(address spouse, string memory originatorName, string memory spouseName) 
    public {
        marriageCount += 1;
        marriages.push(MarriageStruct(msg.sender, spouse, originatorName, block.timestamp, spouseName));
        emit Marry(msg.sender, spouse, originatorName, block.timestamp, spouseName);
    }
    function getAllTransactions() public view returns (MarriageStruct[] memory){
        return marriages;

    }
    function getTransactionCount() public view returns (uint256) {
        return marriageCount;
        
    }
}