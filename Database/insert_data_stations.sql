LOAD DATA LOCAL INFILE 'C:/Users/suvan/Desktop/Solita DevAcademy/Helsingin_ja_Espoon_kaupunkipy%C3%B6r%C3%A4asemat_avoin.csv' 
INTO TABLE bikestations
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;