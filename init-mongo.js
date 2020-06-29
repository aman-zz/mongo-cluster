use admin
db.createUser( {
     user: "siteUserAdmin",
     pwd: "password",
     roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
   });
db.createUser( {
     user: "siteRootAdmin",
     pwd: "password",
     roles: [ { role: "root", db: "admin" } ]
   });
rs.initiate();
