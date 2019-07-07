export const COLUMNS = [
    {
     "name": "_id",
     "outputName": "_id",
     "type": "string",
     "alias": "ID",
     "defaultView": false,
     "operators": [
      "search",
      "eq",
      "ne"
     ],
     "defaultOperator": "search",
     "reference": "",
     "typeData": null
    },
    {
     "name": "created",
     "outputName": "created",
     "type": "datetime",
     "alias": "vytvořeno",
     "defaultView": false,
     "operators": [
      "lt",
      "lte",
      "gte",
      "gt"
     ],
     "defaultOperator": "gte",
     "reference": "",
     "typeData": null
    },
    {
     "name": "email",
     "outputName": "email",
     "type": "string",
     "alias": "Email",
     "defaultView": true,
     "operators": [
      "search",
      "eq",
      "ne"
     ],
     "defaultOperator": "search",
     "reference": "",
     "typeData": null
    },
    {
     "name": "firstName",
     "outputName": "firstName",
     "type": "string",
     "alias": "First Name",
     "defaultView": true,
     "operators": [
      "search",
      "eq",
      "ne"
     ],
     "defaultOperator": "search",
     "reference": "",
     "typeData": null
    },
    {
     "name": "fullName",
     "outputName": "fullName",
     "type": "string",
     "alias": "Full Name",
     "defaultView": true,
     "operators": [
      "search",
      "eq",
      "ne"
     ],
     "defaultOperator": "search",
     "reference": "",
     "typeData": null
    },
    {
     "name": "languageId",
     "outputName": "languageId",
     "type": "string",
     "alias": "Language Id",
     "defaultView": true,
     "operators": [
      "search",
      "eq",
      "ne"
     ],
     "defaultOperator": "search",
     "reference": "",
     "typeData": null
    },
    {
     "name": "lastName",
     "outputName": "lastName",
     "type": "string",
     "alias": "příjmení",
     "defaultView": false,
     "operators": [
      "search",
      "eq",
      "ne"
     ],
     "defaultOperator": "search",
     "reference": "",
     "typeData": null
    },
    {
     "name": "lastUpdate",
     "outputName": "lastUpdate",
     "type": "datetime",
     "alias": "aktualizováno",
     "defaultView": false,
     "operators": [
      "lt",
      "lte",
      "gte",
      "gt"
     ],
     "defaultOperator": "gte",
     "reference": "",
     "typeData": null
    },
    {
     "name": "phone",
     "outputName": "phone",
     "type": "string",
     "alias": "telefon",
     "defaultView": true,
     "operators": [
      "search",
      "eq",
      "ne"
     ],
     "defaultOperator": "search",
     "reference": "",
     "typeData": null
    },
    {
     "name": "status",
     "outputName": "status",
     "type": "enum",
     "alias": "stav",
     "defaultView": true,
     "operators": [
      "eq",
      "ne"
     ],
     "defaultOperator": "eq",
     "reference": "",
     "typeData": {
      "values": [
       "ACTIVE",
       "DELETED"
      ]
     }
    }
   ];
 
   export const DATA = [
    {
     "clientUserList": [
      {
       "_id": "ydkd8pmZSsic__irwc1vQw",
       "accessToClientZone": true,
       "authorizedToSendTickets": true,
       "clientId": "Ho0I5zt6Ri2_PnrTqFkOOA",
       "cloudDnsEnabled": false,
       "id": "ydkd8pmZSsic__irwc1vQw",
       "roleCode": "MANAGER",
       "status": "ACTIVE",
       "userId": "aQsvGyGITtuIqpWJVLlfog"
      }
     ],
     "countryCallingCode": 420,
     "created": "2020-07-31T00:00:07.794755Z",
     "email": "ludvik04@hajkova.cz",
     "firstName": "Naděžda",
     "fullName": "Naděžda Hampl",
     "id": "aQsvGyGITtuIqpWJVLlfog",
     "language": {
      "_id": "cs",
      "id": "cs",
      "name": "čeština"
     },
     "languageId": "cs",
     "lastName": "Hampl",
     "lastUpdate": "2020-07-31T00:00:07.794762Z",
     "passwordHash": null,
     "phoneNumber": 732234567,
     "status": "ACTIVE"
    },
    {
     "clientUserList": [
      {
       "_id": "DkQz4F5FQz2oPl6U_yWNBA",
       "accessToClientZone": true,
       "authorizedToSendTickets": true,
       "clientId": "-vOwyq8uQImXOuTpZamQMg",
       "cloudDnsEnabled": false,
       "id": "DkQz4F5FQz2oPl6U_yWNBA",
       "roleCode": "MANAGER",
       "status": "ACTIVE",
       "userId": "4xPgt4jIQQ2vA8TViUR1ow"
      }
     ],
     "countryCallingCode": 420,
     "created": "2020-03-02T00:00:06.282874Z",
     "email": "hanousek.blanka@cihlar.com",
     "firstName": "Radomír",
     "fullName": "Radomír Jašek",
     "id": "4xPgt4jIQQ2vA8TViUR1ow",
     "language": {
      "_id": "cs",
      "id": "cs",
      "name": "čeština"
     },
     "languageId": "cs",
     "lastName": "Jašek",
     "lastUpdate": "2020-03-02T00:00:06.282882Z",
     "passwordHash": null,
     "phoneNumber": 732234567,
     "status": "ACTIVE"
    },
    {
     "clientUserList": [
      {
       "_id": "Pb0SYb8pRQehjOxiSC5eGQ",
       "accessToClientZone": true,
       "authorizedToSendTickets": true,
       "clientId": "UArVijMIQP20lIEVobfivA",
       "cloudDnsEnabled": false,
       "id": "Pb0SYb8pRQehjOxiSC5eGQ",
       "roleCode": "MANAGER",
       "status": "ACTIVE",
       "userId": "Py7dYpOPQwqs6Cf5auNq0w"
      }
     ],
     "countryCallingCode": 420,
     "created": "2021-05-01T00:00:07.129298Z",
     "email": "jansky.renata@yahoo.com",
     "firstName": "Karolína",
     "fullName": "Karolína Drozdová",
     "id": "Py7dYpOPQwqs6Cf5auNq0w",
     "language": {
      "_id": "cs",
      "id": "cs",
      "name": "čeština"
     },
     "languageId": "cs",
     "lastName": "Drozdová",
     "lastUpdate": "2021-05-01T00:00:07.129304Z",
     "passwordHash": null,
     "phoneNumber": 732234567,
     "status": "ACTIVE"
    },
    {
     "clientUserList": [
      {
       "_id": "k5_i6qGiR929ykwS3ztd5Q",
       "accessToClientZone": true,
       "authorizedToSendTickets": true,
       "clientId": "bP5bkXROReaOHjusjPhJmQ",
       "cloudDnsEnabled": false,
       "id": "k5_i6qGiR929ykwS3ztd5Q",
       "roleCode": "MANAGER",
       "status": "ACTIVE",
       "userId": "m7_f1KB8SB-8ot8iMY6uTw"
      }
     ],
     "countryCallingCode": 420,
     "created": "2019-05-01T00:00:06.587357Z",
     "email": "uvolna@post.cz",
     "firstName": "Milan",
     "fullName": "Milan Weissová",
     "id": "m7_f1KB8SB-8ot8iMY6uTw",
     "language": {
      "_id": "cs",
      "id": "cs",
      "name": "čeština"
     },
     "languageId": "cs",
     "lastName": "Weissová",
     "lastUpdate": "2019-05-01T00:00:06.587366Z",
     "passwordHash": null,
     "phoneNumber": 732234567,
     "status": "ACTIVE"
    },
    {
     "clientUserList": [
      {
       "_id": "RpYoFSyFS5O-1dqgvTRQnw",
       "accessToClientZone": true,
       "authorizedToSendTickets": true,
       "clientId": "LOnyZbwKQi6KDLgFfrCd6w",
       "cloudDnsEnabled": false,
       "id": "RpYoFSyFS5O-1dqgvTRQnw",
       "roleCode": "MANAGER",
       "status": "ACTIVE",
       "userId": "Ve9cegspTD-cyAqGP_Rj9A"
      }
     ],
     "countryCallingCode": 420,
     "created": "2021-10-01T00:00:06.656886Z",
     "email": "radim.moudry@yahoo.com",
     "firstName": "Miloslav",
     "fullName": "Miloslav Beránek",
     "id": "Ve9cegspTD-cyAqGP_Rj9A",
     "language": {
      "_id": "cs",
      "id": "cs",
      "name": "čeština"
     },
     "languageId": "cs",
     "lastName": "Beránek",
     "lastUpdate": "2021-10-01T00:00:06.656893Z",
     "passwordHash": null,
     "phoneNumber": 732234567,
     "status": "ACTIVE"
    },
    {
     "clientUserList": [
      {
       "_id": "szlQd933Sf-Va6FqJwRuUA",
       "accessToClientZone": true,
       "authorizedToSendTickets": true,
       "clientId": "_ysIasPURQe9y9gNS8s8oQ",
       "cloudDnsEnabled": false,
       "id": "szlQd933Sf-Va6FqJwRuUA",
       "roleCode": "MANAGER",
       "status": "ACTIVE",
       "userId": "cEHme4StQZK0nuDrU37ifw"
      }
     ],
     "countryCallingCode": 420,
     "created": "2018-12-01T02:06:05.682988Z",
     "email": "ludmila78@gmail.com",
     "firstName": "Petr",
     "fullName": "Petr Hořejšíová",
     "id": "cEHme4StQZK0nuDrU37ifw",
     "language": {
      "_id": "cs",
      "id": "cs",
      "name": "čeština"
     },
     "languageId": "cs",
     "lastName": "Hořejšíová",
     "lastUpdate": "2018-12-01T02:06:05.682994Z",
     "passwordHash": null,
     "phoneNumber": 732234567,
     "status": "ACTIVE"
    },
    {
     "clientUserList": [
      {
       "_id": "xHs6HCQ6SO6sPybvF48Zog",
       "accessToClientZone": true,
       "authorizedToSendTickets": true,
       "clientId": "wCIQoVbcTMqUZPwKR9bmdA",
       "cloudDnsEnabled": false,
       "id": "xHs6HCQ6SO6sPybvF48Zog",
       "roleCode": "MANAGER",
       "status": "ACTIVE",
       "userId": "c5w6KnTzQSmVc6vXzdFDmg"
      }
     ],
     "countryCallingCode": null,
     "created": "2022-12-01T00:15:51.875732Z",
     "email": "chudarek@gmail.com",
     "firstName": "Marek",
     "fullName": "Marek Chudárek",
     "id": "c5w6KnTzQSmVc6vXzdFDmg",
     "language": {
      "_id": "cs",
      "id": "cs",
      "name": "čeština"
     },
     "languageId": "cs",
     "lastName": "Chudárek",
     "lastUpdate": "2022-12-01T00:15:51.875743Z",
     "passwordHash": null,
     "phoneNumber": null,
     "status": "ACTIVE"
    },
    {
     "clientUserList": [
      {
       "_id": "ykPARMITQCiL7pnVrYDuYQ",
       "accessToClientZone": true,
       "authorizedToSendTickets": true,
       "clientId": "eXTro4P7TWiPt58yUApvkw",
       "cloudDnsEnabled": false,
       "id": "ykPARMITQCiL7pnVrYDuYQ",
       "roleCode": "MANAGER",
       "status": "ACTIVE",
       "userId": "o-Aegix-R5msJlcVrVuzAw"
      }
     ],
     "countryCallingCode": 420,
     "created": "2022-03-03T00:00:06.410455Z",
     "email": "lpekarova@yahoo.com",
     "firstName": "Ján",
     "fullName": "Ján Neumann",
     "id": "o-Aegix-R5msJlcVrVuzAw",
     "language": {
      "_id": "cs",
      "id": "cs",
      "name": "čeština"
     },
     "languageId": "cs",
     "lastName": "Neumann",
     "lastUpdate": "2022-03-03T00:00:06.410462Z",
     "passwordHash": null,
     "phoneNumber": 732234567,
     "status": "ACTIVE"
    },
    {
     "clientUserList": [
      {
       "_id": "ZN9Vh-FvSJa4WzyrlfCsqw",
       "accessToClientZone": true,
       "authorizedToSendTickets": true,
       "clientId": "7vz3TJ-PQPqNn56L7SbnlA",
       "cloudDnsEnabled": false,
       "id": "ZN9Vh-FvSJa4WzyrlfCsqw",
       "roleCode": "MANAGER",
       "status": "ACTIVE",
       "userId": "KcwAXpDKQ5WQLhDdI3RevA"
      }
     ],
     "countryCallingCode": 420,
     "created": "2018-07-03T07:28:58.750434Z",
     "email": "jiri.panek@gmail.com",
     "firstName": "Helena",
     "fullName": "Helena Kolmanová",
     "id": "KcwAXpDKQ5WQLhDdI3RevA",
     "language": {
      "_id": "cs",
      "id": "cs",
      "name": "čeština"
     },
     "languageId": "cs",
     "lastName": "Kolmanová",
     "lastUpdate": "2018-07-03T07:28:58.79438Z",
     "passwordHash": null,
     "phoneNumber": 732234567,
     "status": "ACTIVE"
    },
    {
     "clientUserList": [
      {
       "_id": "RB-hKxdlTJeUAh1EF7WyOQ",
       "accessToClientZone": true,
       "authorizedToSendTickets": true,
       "clientId": "MDHrFTfiQ3eCHGg6vyPjEw",
       "cloudDnsEnabled": false,
       "id": "RB-hKxdlTJeUAh1EF7WyOQ",
       "roleCode": "MANAGER",
       "status": "ACTIVE",
       "userId": "6PH4TytgS6Oji7gAAKEWGQ"
      }
     ],
     "countryCallingCode": 420,
     "created": "2022-07-31T00:00:07.041958Z",
     "email": "nikola.basta@dockalova.cz",
     "firstName": "Dominik",
     "fullName": "Dominik Votrubová",
     "id": "6PH4TytgS6Oji7gAAKEWGQ",
     "language": {
      "_id": "cs",
      "id": "cs",
      "name": "čeština"
     },
     "languageId": "cs",
     "lastName": "Votrubová",
     "lastUpdate": "2022-07-31T00:00:07.041964Z",
     "passwordHash": null,
     "phoneNumber": 732234567,
     "status": "ACTIVE"
    },
    {
     "clientUserList": [
      {
       "_id": "CW6K7UKaQAeRyKXzB0jBpQ",
       "accessToClientZone": true,
       "authorizedToSendTickets": true,
       "clientId": "3zUDEKFZSviJSMdmWdm7RA",
       "cloudDnsEnabled": false,
       "id": "CW6K7UKaQAeRyKXzB0jBpQ",
       "roleCode": "MANAGER",
       "status": "ACTIVE",
       "userId": "Qnxp__G4TkGoUiis934e2Q"
      }
     ],
     "countryCallingCode": 420,
     "created": "2019-10-01T00:00:06.455778Z",
     "email": "hejdova.vitezslav@atlas.cz",
     "firstName": "Anežka",
     "fullName": "Anežka Příhoda",
     "id": "Qnxp__G4TkGoUiis934e2Q",
     "language": {
      "_id": "cs",
      "id": "cs",
      "name": "čeština"
     },
     "languageId": "cs",
     "lastName": "Příhoda",
     "lastUpdate": "2019-10-01T00:00:06.455785Z",
     "passwordHash": null,
     "phoneNumber": 732234567,
     "status": "ACTIVE"
    },
    {
     "clientUserList": [
      {
       "_id": "xxzoKOsdQQGcsMBKhSJypQ",
       "accessToClientZone": true,
       "authorizedToSendTickets": true,
       "clientId": "NZ-ans__SmqFLCrmU2KROQ",
       "cloudDnsEnabled": false,
       "id": "xxzoKOsdQQGcsMBKhSJypQ",
       "roleCode": "MANAGER",
       "status": "ACTIVE",
       "userId": "qu74n9pUReeEIT3pcVL9Ug"
      }
     ],
     "countryCallingCode": 420,
     "created": "2020-12-01T00:00:06.091587Z",
     "email": "yjirouskova@centrum.cz",
     "firstName": "Marta",
     "fullName": "Marta Vilímek",
     "id": "qu74n9pUReeEIT3pcVL9Ug",
     "language": {
      "_id": "cs",
      "id": "cs",
      "name": "čeština"
     },
     "languageId": "cs",
     "lastName": "Vilímek",
     "lastUpdate": "2020-12-01T00:00:06.091593Z",
     "passwordHash": null,
     "phoneNumber": 732234567,
     "status": "ACTIVE"
    }
   ];