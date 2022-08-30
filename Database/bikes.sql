CREATE TABLE bikes05 (
	Departure DATETIME,
	ReturnDate DATETIME,
	DepartureStationID INT NOT NULL,
	DepartureStationName VARCHAR(255),
	ReturnStationID INT NOT NULL,
	ReturnStationName VARCHAR(255),
	CoveredDistance INT,
	Duration INT,
    FOREIGN KEY (DepartureStationID) REFERENCES bikestations(ID),
    FOREIGN KEY (ReturnStationID) REFERENCES bikestations(ID)
);

CREATE TABLE bikes06 (
	Departure DATETIME,
	ReturnDate DATETIME,
	DepartureStationID INT NOT NULL,
	DepartureStationName VARCHAR(255),
	ReturnStationID INT NOT NULL,
	ReturnStationName VARCHAR(255),
	CoveredDistance INT,
	Duration INT,
    FOREIGN KEY (DepartureStationID) REFERENCES bikestations(ID),
    FOREIGN KEY (ReturnStationID) REFERENCES bikestations(ID)
);

CREATE TABLE bikes07 (
	Departure DATETIME,
	ReturnDate DATETIME,
	DepartureStationID INT NOT NULL,
	DepartureStationName VARCHAR(255),
	ReturnStationID INT NOT NULL,
	ReturnStationName VARCHAR(255),
	CoveredDistance INT,
	Duration INT,
    FOREIGN KEY (DepartureStationID) REFERENCES bikestations(ID),
    FOREIGN KEY (ReturnStationID) REFERENCES bikestations(ID)
);