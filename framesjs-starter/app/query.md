query BasicAPI {
  collection(
    id: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"
    block: {number_gte: 10}
  ) {
    buyerCount
    creatorRevenueETH
    cumulativeTradeVolumeETH
    marketplaceRevenueETH
    id
    name
    nftStandard
    royaltyFee
    sellerCount
    symbol
    totalRevenueETH
    totalSupply
    tradeCount
    trades(first: 10, orderBy: priceETH, orderDirection: desc) {
      id
      priceETH
      seller
    }
  }
}



{
  "data": {
    "collections": [
      {
        "creatorRevenueETH": "3001.779379648388625145",
        "id": "0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270",
        "name": "Art Blocks",
        "symbol": "BLOCKS",
        "totalSupply": "175525"
      },
      {
        "creatorRevenueETH": "2792.584335933466578992",
        "id": "0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258",
        "name": "Otherdeed",
        "symbol": "OTHR",
        "totalSupply": "100000"
      },
      {
        "creatorRevenueETH": "1930.741533692901235035",
        "id": "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
        "name": "BoredApeYachtClub",
        "symbol": "BAYC",
        "totalSupply": "10000"
      },
      {
        "creatorRevenueETH": "1868.15007358395317682",
        "id": "0x764aeebcf425d56800ef2c84f2578689415a2daa",
        "name": "SewerPass",
        "symbol": "SEWER",
        "totalSupply": "345"
      },
      {
        "creatorRevenueETH": "1597.112162186014509712",
        "id": "0x39ee2c7b3cb80254225884ca001f57118c8f21b6",
        "name": "Potatoz",
        "symbol": "Potatoz",
        "totalSupply": "921"
      },
      {
        "creatorRevenueETH": "1372.322474626559754251",
        "id": "0x495f947276749ce646f68ac8c248420045cb7b5e",
        "name": "OpenSea Shared Storefront",
        "symbol": "OPENSTORE",
        "totalSupply": null
      },
      {
        "creatorRevenueETH": "1321.867559428660900713",
        "id": "0x60e4d786628fea6478f785a6d7e704777c86a7c6",
        "name": "MutantApeYachtClub",
        "symbol": "MAYC",
        "totalSupply": "19418"
      },
      {
        "creatorRevenueETH": "1239.562589498763632257",
        "id": "0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b",
        "name": "CloneX",
        "symbol": "CloneX",
        "totalSupply": "19306"
      },
      {
        "creatorRevenueETH": "1130.670530974505554551",
        "id": "0x23581767a106ae21c074b2276d25e5c3e136a68b",
        "name": "Moonbirds",
        "symbol": "MOONBIRD",
        "totalSupply": "10000"
      },
      {
        "creatorRevenueETH": "1029.786153907300083228",
        "id": "0xed5af388653567af2f388e6224dc7c4b3241c544",
        "name": "Azuki",
        "symbol": "AZUKI",
        "totalSupply": "10000"
      },
      {
        "creatorRevenueETH": "908.57960762256184365",
        "id": "0x8a90cab2b38dba80c64b7734e58ee1db38b8992e",
        "name": "Doodles",
        "symbol": "DOODLE",
        "totalSupply": "10000"
      },
      {
        "creatorRevenueETH": "891.189497119329365344",
        "id": "0x059edd72cd353df5106d2b9cc5ab83a52287ac3a",
        "name": "Art Blocks",
        "symbol": "BLOCKS",
        "totalSupply": "10637"
      },
      {
        "creatorRevenueETH": "881.14148558135314087",
        "id": "0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e",
        "name": "goblintown",
        "symbol": "GOBLIN",
        "totalSupply": "9999"
      },
      {
        "creatorRevenueETH": "830.429218118722533111",
        "id": "0x769272677fab02575e84945f03eca517acc544cc",
        "name": "Captainz",
        "symbol": "Captainz",
        "totalSupply": "4498"
      },
      {
        "creatorRevenueETH": "801.969822136605546828",
        "id": "0xd1258db6ac08eb0e625b75b371c023da478e94a9",
        "name": "DigiDaigaku",
        "symbol": "DIDA",
        "totalSupply": "1624"
      },
      {
        "creatorRevenueETH": "777.762911066753257975",
        "id": "0x394e3d3044fc89fcdd966d3cb35ac0b32b0cda91",
        "name": "RENGA",
        "symbol": "RENGA",
        "totalSupply": null
      },
      {
        "creatorRevenueETH": "773.233024298159366562",
        "id": "0x33fd426905f149f8376e227d0c9d3340aad17af1",
        "name": null,
        "symbol": null,
        "totalSupply": null
      },
      {
        "creatorRevenueETH": "670.021612834751251829",
        "id": "0xe21ebcd28d37a67757b9bc7b290f4c4928a430b1",
        "name": "The Saudis",
        "symbol": "SAUD",
        "totalSupply": "1110"
      },
      {
        "creatorRevenueETH": "638.891971105824864511",
        "id": "0x1485297e942ce64e0870ece60179dfda34b4c625",
        "name": "Moonrunners",
        "symbol": "MOONR",
        "totalSupply": "10000"
      },
      {
        "creatorRevenueETH": "634.464656278765604137",
        "id": "0x31d843b99c2c4088cd20d96ef2426673b958ff70",
        "name": "MechMinds",
        "symbol": "MM",
        "totalSupply": "7286"
      },
      {
        "creatorRevenueETH": "622.613698144980626902",
        "id": "0x231d3559aa848bf10366fb9868590f01d34bf240",
        "name": "Valhalla",
        "symbol": "VAL",
        "totalSupply": "1247"
      },
      {
        "creatorRevenueETH": "604.510188857050226941",
        "id": "0x99a9b7c1116f9ceeb1652de04d5969cce509b069",
        "name": "Art Blocks",
        "symbol": "BLOCKS",
        "totalSupply": null
      },
      {
        "creatorRevenueETH": "602.906702459519557382",
        "id": "0x845a007d9f283614f403a24e3eb3455f720559ca",
        "name": "CryptoNinjaPartners",
        "symbol": "CNP",
        "totalSupply": "22222"
      },
      {
        "creatorRevenueETH": "597.075595374884900457",
        "id": "0x7daec605e9e2a1717326eedfd660601e2753a057",
        "name": null,
        "symbol": null,
        "totalSupply": null
      },
      {
        "creatorRevenueETH": "593.466784806581059035",
        "id": "0xbd3531da5cf5857e7cfaa92426877b022e612cf8",
        "name": "PudgyPenguins",
        "symbol": "PPG",
        "totalSupply": "8888"
      },
      {
        "creatorRevenueETH": "567.095004196480726168",
        "id": "0x77372a4cc66063575b05b44481f059be356964a4",
        "name": "a KID called BEAST",
        "symbol": "AKCB",
        "totalSupply": "1036"
      },
      {
        "creatorRevenueETH": "553.163198028393891519",
        "id": "0x1792a96e5668ad7c167ab804a100ce42395ce54d",
        "name": "Moonbirds Oddities",
        "symbol": "ODDITIES",
        "totalSupply": "10000"
      },
      {
        "creatorRevenueETH": "546.427786434919146915",
        "id": "0xe6d48bf4ee912235398b96e16db6f310c21e82cb",
        "name": "God Hates NFTees",
        "symbol": "GHN",
        "totalSupply": "350"
      },
      {
        "creatorRevenueETH": "534.454191313031000466",
        "id": "0x60bb1e2aa1c9acafb4d34f71585d7e959f387769",
        "name": "Art Gobblers",
        "symbol": "GOBBLER",
        "totalSupply": null
      },
      {
        "creatorRevenueETH": "515.84852495890608361",
        "id": "0x76be3b62873462d2142405439777e971754e8e77",
        "name": "parallel",
        "symbol": "LL",
        "totalSupply": null
      },
      {
        "creatorRevenueETH": "478.485184116894016182",
        "id": "0xae99a698156ee8f8d07cbe7f271c31eeaac07087",
        "name": "Mutant Hound Collars",
        "symbol": "MHC",
        "totalSupply": "639"
      },
      {
        "creatorRevenueETH": "466.780992666482654596",
        "id": "0x942bc2d3e7a589fe5bd4a5c6ef9727dfd82f5c8a",
        "name": "Art Blocks Explorations",
        "symbol": "EXPLORE",
        "totalSupply": null
      },
      {
        "creatorRevenueETH": "432.419930511801316109",
        "id": "0x5cc5b05a8a13e3fbdb0bb9fccd98d38e50f90c38",
        "name": "Sandbox's LANDs",
        "symbol": "LAND",
        "totalSupply": null
      },
      {
        "creatorRevenueETH": "426.134219751933762653",
        "id": "0x31d45de84fde2fb36575085e05754a4932dd5170",
        "name": "RareApepeYachtClub",
        "symbol": "RAYC",
        "totalSupply": "4984"
      },
      {
        "creatorRevenueETH": "402.069625907658436",
        "id": "0x34eebee6942d8def3c125458d1a86e0a897fd6f9",
        "name": "Checks",
        "symbol": "CHECKS",
        "totalSupply": "1397"
      },
      {
        "creatorRevenueETH": "380.903429377008015665",
        "id": "0x8dcb8b2d721c022552d826f8bcf2995747248d31",
        "name": "Women Ape Yacht Club",
        "symbol": "WAYC",
        "totalSupply": "88"
      },
      {
        "creatorRevenueETH": "373.455931717670506881",
        "id": "0x466cfcd0525189b573e794f554b8a751279213ac",
        "name": "Dooplicator",
        "symbol": "DOOPL",
        "totalSupply": "8995"
      },
      {
        "creatorRevenueETH": "363.637276939737693018",
        "id": "0x306b1ea3ecdf94ab739f1910bbda052ed4a9f949",
        "name": "Beanz",
        "symbol": "BEANZ",
        "totalSupply": "19950"
      },
      {
        "creatorRevenueETH": "356.500916329077235873",
        "id": "0x670d4dd2e6badfbbd372d0d37e06cd2852754a04",
        "name": "Super Cool World",
        "symbol": "COOL",
        "totalSupply": "595"
      },
      {
        "creatorRevenueETH": "356.054854652838333737",
        "id": "0xc178994cb9b66307cd62db8b411759dd36d9c2ee",
        "name": "COCKPUNCH by Tim Ferriss",
        "symbol": "COCKPUNCH",
        "totalSupply": "715"
      },
      {
        "creatorRevenueETH": "354.468250672790109752",
        "id": "0x64ad353bc90a04361c4810ae7b3701f3beb48d7e",
        "name": "Black Box",
        "symbol": "BOX",
        "totalSupply": "7500"
      },
      {
        "creatorRevenueETH": "352.653951233866733956",
        "id": "0x2c88aa0956bc9813505d73575f653f69ada60923",
        "name": "Land",
        "symbol": "LAND",
        "totalSupply": "19973"
      },
      {
        "creatorRevenueETH": "343.369584218718830356",
        "id": "0xeb2dfc54ebafca8f50efcc1e21a9d100b5aeb349",
        "name": "Kubz",
        "symbol": "Kubz",
        "totalSupply": "10"
      },
      {
        "creatorRevenueETH": "342.060556398148148479",
        "id": "0xa3aee8bce55beea1951ef834b99f3ac60d1abeeb",
        "name": "VeeFriends",
        "symbol": "VFT",
        "totalSupply": "10255"
      },
      {
        "creatorRevenueETH": "337.025193007826198003",
        "id": "0x1a92f7381b9f03921564a437210bb9396471050c",
        "name": "Cool Cats",
        "symbol": "COOL",
        "totalSupply": "9941"
      },
      {
        "creatorRevenueETH": "319.772989752181682671",
        "id": "0xc99c679c50033bbc5321eb88752e89a93e9e83c5",
        "name": "KILLABEARS",
        "symbol": "KILLABEARS",
        "totalSupply": "3333"
      },
      {
        "creatorRevenueETH": "316.796121157369234539",
        "id": "0xbd4455da5929d5639ee098abfaa3241e9ae111af",
        "name": "NFT Worlds",
        "symbol": "NFT Worlds",
        "totalSupply": "10000"
      },
      {
        "creatorRevenueETH": "311.25225913000000014",
        "id": "0xc73b17179bf0c59cd5860bb25247d1d1092c1088",
        "name": "QQL Mint Pass",
        "symbol": "QQL-MP",
        "totalSupply": "990"
      },
      {
        "creatorRevenueETH": "303.51211323125542525",
        "id": "0x33c6eec1723b12c46732f7ab41398de45641fa42",
        "name": "[ Ledger ] Market Pass - Genesis Edition",
        "symbol": "LMP",
        "totalSupply": "609"
      },
      {
        "creatorRevenueETH": "296.245968013465443685",
        "id": "0xc5b52253f5225835cc81c52cdb3d6a22bc3b0c93",
        "name": "mcgoblintownwtf",
        "symbol": "MCGOBLIN",
        "totalSupply": "7813"
      },
      {
        "creatorRevenueETH": "290.940291910569126064",
        "id": "0xacf63e56fd08970b43401492a02f6f38b6635c91",
        "name": "Yakuza Pandas",
        "symbol": "YKPS",
        "totalSupply": null
      },
      {
        "creatorRevenueETH": "290.420503445995745588",
        "id": "0x6d4bbc0387dd4759eee30f6a482ac6dc2df3facf",
        "name": null,
        "symbol": null,
        "totalSupply": null
      },
      {
        "creatorRevenueETH": "286.470648999063916883",
        "id": "0x3a2096754df385553c4252e5a82dc862e64169bb",
        "name": "The Possessed",
        "symbol": "PSSSSD",
        "totalSupply": "286"
      },
      {
        "creatorRevenueETH": "284.062230960565477417",
        "id": "0x7d8820fa92eb1584636f4f5b8515b5476b75171a",
        "name": "Murakami.Flowers",
        "symbol": "M.F",
        "totalSupply": "9440"
      },
      {
        "creatorRevenueETH": "281.045214100000000083",
        "id": "0x08d7c0242953446436f34b4c78fe9da38c73668d",
        "name": "PROOF Collective",
        "symbol": "PROOF",
        "totalSupply": "1000"
      },
      {
        "creatorRevenueETH": "277.465176846521179933",
        "id": "0x7df64f69544c5bf71171dc5ab69b8602c2ff1e27",
        "name": "Kitaro World",
        "symbol": "KITARO",
        "totalSupply": "121"
      },
      {
        "creatorRevenueETH": "269.315363390513625344",
        "id": "0x543d43f390b7d681513045e8a85707438c463d80",
        "name": "Webaverse Genesis Pass",
        "symbol": "WEBA",
        "totalSupply": "3573"
      },
      {
        "creatorRevenueETH": "260.079043627385681549",
        "id": "0x7f36182dee28c45de6072a34d29855bae76dbe2f",
        "name": "Wolf Game",
        "symbol": "WGAME",
        "totalSupply": null
      },
      {
        "creatorRevenueETH": "252.299107520362658746",
        "id": "0xfe8c6d19365453d26af321d0e8c910428c23873f",
        "name": "Cold Blooded Creepz",
        "symbol": "CBC",
        "totalSupply": "11111"
      },
      {
        "creatorRevenueETH": "248.378431047389954149",
        "id": "0xb5643598496b159263c67bd0d25728713f5aad04",
        "name": "YOLO",
        "symbol": "YOLO",
        "totalSupply": "3064"
      },
      {
        "creatorRevenueETH": "243.275726055136764011",
        "id": "0x6c410cf0b8c113dc6a7641b431390b11d5515082",
        "name": "Egg",
        "symbol": "Egg",
        "totalSupply": "282"
      },
      {
        "creatorRevenueETH": "241.476026800217707995",
        "id": "0x61e3d1c26802df805e9fc22dc26342e29ecfe860",
        "name": "Savage Nation",
        "symbol": "Savage Nation",
        "totalSupply": "207"
      },
      {
        "creatorRevenueETH": "233.615407111015796027",
        "id": "0x19b86299c21505cdf59ce63740b240a9c822b5e4",
        "name": "DEGEN TOONZ",
        "symbol": "TOONZ",
        "totalSupply": "8888"
      },
      {
        "creatorRevenueETH": "226.873234976876745536",
        "id": "0xc7c962e44316e0c052448a0fdd1da15ea24fa9a9",
        "name": "Gossamer Seed",
        "symbol": "SEED",
        "totalSupply": "1124"
      },
      {
        "creatorRevenueETH": "225.128553290567422614",
        "id": "0x7bd29408f11d2bfc23c34f18275bbf23bb716bc7",
        "name": "Meebits",
        "symbol": "⚇",
        "totalSupply": "20000"
      },
      {
        "creatorRevenueETH": "224.922027029482284457",
        "id": "0xa604060890923ff400e8c6f5290461a83aedacec",
        "name": null,
        "symbol": null,
        "totalSupply": null
      },
      {
        "creatorRevenueETH": "223.687770248386734655",
        "id": "0x9378368ba6b85c1fba5b131b530f5f5bedf21a18",
        "name": "VeeFriends Series 2",
        "symbol": "VF2",
        "totalSupply": "54052"
      },
      {
        "creatorRevenueETH": "222.893345154399925702",
        "id": "0xdfde78d2baec499fe18f2be74b6c287eed9511d7",
        "name": "BrainDrops",
        "symbol": "BRAIN",
        "totalSupply": "8733"
      },
      {
        "creatorRevenueETH": "219.17287558503732395",
        "id": "0x42069abfe407c60cf4ae4112bedead391dba1cdb",
        "name": "CryptoDickbutts S3",
        "symbol": "CDB",
        "totalSupply": "5200"
      },
      {
        "creatorRevenueETH": "214.535781842492500266",
        "id": "0x27787755137863bb7f2387ed34942543c9f24efe",
        "name": "Factura by Mathias Isaksen",
        "symbol": "FACTURA",
        "totalSupply": "66"
      },
      {
        "creatorRevenueETH": "214.210703878827646917",
        "id": "0x684e4ed51d350b4d76a3a07864df572d24e6dc4c",
        "name": "Isekai Meta",
        "symbol": "ISEKAI",
        "totalSupply": "1462"
      },
      {
        "creatorRevenueETH": "206.834628728050000889",
        "id": "0x46fdfcb3cd89a1c54d36ee83a4adc184747b40d9",
        "name": "META KONGZ",
        "symbol": "KONGZ",
        "totalSupply": "7253"
      },
      {
        "creatorRevenueETH": "206.419188010922974467",
        "id": "0x477f885f6333317f5b2810ecc8afadc7d5b69dd2",
        "name": "YuGiYn",
        "symbol": "YGY",
        "totalSupply": "6398"
      },
      {
        "creatorRevenueETH": "201.219538915444444802",
        "id": "0xefed2a58cc6a5b81f9158b231847f005cf086c01",
        "name": "Hedz",
        "symbol": "HEDZ",
        "totalSupply": "57"
      },
      {
        "creatorRevenueETH": "200.405629801011464243",
        "id": "0x960b7a6bcd451c9968473f7bbfd9be826efd549a",
        "name": "OnChainMonkey",
        "symbol": "OCMONK",
        "totalSupply": "9500"
      },
      {
        "creatorRevenueETH": "200.15886239800000049",
        "id": "0x86825dfca7a6224cfbd2da48e85df2fc3aa7c4b1",
        "name": null,
        "symbol": null,
        "totalSupply": null
      },
      {
        "creatorRevenueETH": "199.86275777542674506",
        "id": "0x209e639a0ec166ac7a1a4ba41968fa967db30221",
        "name": "Genuine Undead",
        "symbol": "GU",
        "totalSupply": "9999"
      },
      {
        "creatorRevenueETH": "194.132424000000000165",
        "id": "0xd2a077ec359d94e0a0b7e84435eacb40a67a817c",
        "name": "Admit One",
        "symbol": "ADMIT",
        "totalSupply": "1000"
      },
      {
        "creatorRevenueETH": "193.951864152462451322",
        "id": "0xc7e4d1dfb2ffda31f27c6047479dfa7998a07d47",
        "name": "Aopanda Party",
        "symbol": "APP",
        "totalSupply": "4896"
      },
      {
        "creatorRevenueETH": "193.572533262934920783",
        "id": "0x79fcdef22feed20eddacbb2587640e45491b757f",
        "name": "mfer",
        "symbol": "MFER",
        "totalSupply": "10021"
      },
      {
        "creatorRevenueETH": "192.269103469000000024",
        "id": "0xbbb62c4b8ed027530ce5f6663d1a2aa8a7e8cacf",
        "name": "RarePass",
        "symbol": "RAREPASS",
        "totalSupply": "32"
      },
      {
        "creatorRevenueETH": "191.801363209308773584",
        "id": "0x524cab2ec69124574082676e6f654a18df49a048",
        "name": "LilPudgys",
        "symbol": "LP",
        "totalSupply": "19914"
      },
      {
        "creatorRevenueETH": "190.536268900090236293",
        "id": "0xbda2481db91fc0f942ed3f53de378ba45ba9d17e",
        "name": "Farmer",
        "symbol": "FARMER",
        "totalSupply": "11738"
      },
      {
        "creatorRevenueETH": "186.158176934574074547",
        "id": "0xccc441ac31f02cd96c153db6fd5fe0a2f4e6a68d",
        "name": "FLUF",
        "symbol": "FLUF",
        "totalSupply": "10000"
      },
      {
        "creatorRevenueETH": "184.808544398574183558",
        "id": "0xc36cf0cfcb5d905b8b513860db0cfe63f6cf9f5c",
        "name": null,
        "symbol": null,
        "totalSupply": null
      },
      {
        "creatorRevenueETH": "183.736821576137981317",
        "id": "0x0ee80069c9b4993882fe0b3fc256260eff385982",
        "name": "LonelyPop",
        "symbol": "LP",
        "totalSupply": "697"
      },
      {
        "creatorRevenueETH": "182.005897046303329777",
        "id": "0x28472a58a490c5e09a238847f66a68a47cc76f0f",
        "name": "adidas Originals: Into the Metaverse",
        "symbol": "ADI",
        "totalSupply": null
      },
      {
        "creatorRevenueETH": "181.355977075209279495",
        "id": "0xe5e771bc685c5a89710131919c616c361ff001c6",
        "name": "WizNFT",
        "symbol": "WZNFT",
        "totalSupply": "352"
      },
      {
        "creatorRevenueETH": "180.558847586894401759",
        "id": "0xb852c6b5892256c264cc2c888ea462189154d8d7",
        "name": "Rektguy",
        "symbol": "Rektguy",
        "totalSupply": null
      },
      {
        "creatorRevenueETH": "180.375918442769282176",
        "id": "0xba30e5f9bb24caa003e9f2f0497ad287fdf95623",
        "name": "BoredApeKennelClub",
        "symbol": "BAKC",
        "totalSupply": "9602"
      },
      {
        "creatorRevenueETH": "178.333791490022743522",
        "id": "0x364c828ee171616a39897688a831c2499ad972ec",
        "name": "Sappy Seals",
        "symbol": "SAPS",
        "totalSupply": "10000"
      },
      {
        "creatorRevenueETH": "177.029471834250000228",
        "id": "0x0a36f2178c0db2c85471c45334a1dd17d130fd42",
        "name": "GODA Mint Pass",
        "symbol": "GODA",
        "totalSupply": "1000"
      },
      {
        "creatorRevenueETH": "174.851221017295000174",
        "id": "0x59468516a8259058bad1ca5f8f4bff190d30e066",
        "name": "Invisible Friends",
        "symbol": "INVSBLE",
        "totalSupply": "5000"
      },
      {
        "creatorRevenueETH": "170.761248912653000293",
        "id": "0x0e32cee0445413e118b14d02e0409303d338487a",
        "name": "Digital Tycoons Club (Tykes)",
        "symbol": "TYKE",
        "totalSupply": "402"
      },
      {
        "creatorRevenueETH": "168.51200807700000005",
        "id": "0xccf3baa603dfddd7c41619fdb8dd0306b11571fe",
        "name": "YOLO Bunny",
        "symbol": "YB",
        "totalSupply": "3901"
      },
      {
        "creatorRevenueETH": "167.364244632657463608",
        "id": "0x80336ad7a747236ef41f47ed2c7641828a480baa",
        "name": "Chimpers",
        "symbol": "CHIMP",
        "totalSupply": null
      },
      {
        "creatorRevenueETH": "165.218646999774299163",
        "id": "0x8c3fb10693b228e8b976ff33ce88f97ce2ea9563",
        "name": "The Plague",
        "symbol": "FROG",
        "totalSupply": "11000"
      },
      {
        "creatorRevenueETH": "163.792853641072795832",
        "id": "0xaaa7a35e442a77e37cde2f445b359aabf5ad0387",
        "name": "StreetMachine",
        "symbol": "SM",
        "totalSupply": "2298"
      },
      {
        "creatorRevenueETH": "162.798722451291568004",
        "id": "0x82c7a8f707110f5fbb16184a5933e9f78a34c6ab",
        "name": "Emblem Vault V4",
        "symbol": "Emblem.pro",
        "totalSupply": "26499"
      },
      {
        "creatorRevenueETH": "162.309476347588798862",
        "id": "0xaabc3aef1ce0d23eeaabfc7c6cd9043fcebf7400",
        "name": "DigiDaigaku Dragon Eggs",
        "symbol": "DIDDE",
        "totalSupply": "9548"
      }
    ]
  }
}