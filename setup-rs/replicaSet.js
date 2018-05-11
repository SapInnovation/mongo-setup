
rsconf = {
    _id : "replica-set",
    members: [
        { _id : 0, host : "mongo-primary:27017" },
        { _id : 1, host : "mongo-secondary-1:27017" },
        { _id : 2, host : "mongo-secondary-2:27017" }
    ]
};

rs.initiate(rsconf);

rs.conf();