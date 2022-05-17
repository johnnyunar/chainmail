const hre = require("hardhat");

async function main() {
    const Database = await hre.ethers.getContractFactory("Database");
    const database = await Database.deploy();

    await database.deployed();

    console.log("Chainmail Database deployed to:", database.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
