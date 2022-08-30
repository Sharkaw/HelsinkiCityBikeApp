CREATE TABLE bikestations (
	FID INT NOT NULL,
    ID INT NOT NULL,
    Nimi VARCHAR(255),
    Namn VARCHAR(255), 
    Name VARCHAR(255), 
    Osoite VARCHAR(255),
    Adress VARCHAR(255),
    Kaupunki VARCHAR(255),
    Stad VARCHAR(255),
    Operaattor VARCHAR(255),
    Kapasiteet VARCHAR(255),
    X FLOAT(20),
	Y FLOAT(20),
    PRIMARY KEY (ID)
);