// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/// @title The Chainmail Database
/// @author Jan Unar
/// @notice This is the initial chainmail contract implementation
contract Database {

    // Stores the default name of an user and their contact list
    struct user {
        string name;
        contact[] contactList;
    }

    // Each contact is identified by its address and name assigned by the second party
    struct contact {
        address pubkey;
        string name;
    }

    // Message construct stores the single message and its metadata
    struct message {
        address sender;
        uint256 timestamp;
        string subject;
        string msg;
    }

    // Collection of all messages sent via chainmail
    // FIXME: This will get VERY expensive with large datasets
    // IDEA: Use LinkedList but it has to be converted to Array on return:(
    mapping(address => message[]) allMessages; // key: recipient address

    // Sends a new message to a given address
    function sendMessage(address contact_key, string calldata _subj, string calldata _msg) external {
        message memory newMsg = message(msg.sender, block.timestamp, _subj, _msg);
        allMessages[contact_key].push(newMsg);
    }

    // Returns inbox
    // RFE: Paging
    function readInboxMessages() external view returns (message[] memory) {
        return allMessages[msg.sender];
    }

    // Returns outbox
    // TODO: Edit Contract to make outbox calls less expensive
    function readSentMessages() external view returns (message[] memory) {
        return allMessages[msg.sender];
    }
}