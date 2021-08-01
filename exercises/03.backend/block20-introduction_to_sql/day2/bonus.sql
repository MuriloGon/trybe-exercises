-- Q1
SELECT Name, Code from PiecesProviders.Providers
ORDER BY Name DESC
LIMIT 1;

-- Q2 
USE PiecesProviders;
SELECT Pieces.Name AS Piece, Providers.Name, Provides.Price FROM Provides
INNER JOIN Providers ON Provides.Provider=Providers.Code
INNER JOIN Pieces ON Provides.Piece=Pieces.Code
ORDER BY Price DESC
LIMIT 5;

-- Q3
USE PiecesProviders;
SELECT Pieces.Name AS Piece, Providers.Name, Provides.Price FROM Provides
INNER JOIN Providers ON Provides.Provider=Providers.Code
INNER JOIN Pieces ON Provides.Piece=Pieces.Code
ORDER BY Price DESC
LIMIT 3 OFFSET 2;

-- Q4
USE PiecesProviders;
SELECT CONCAT(
	"A peça mais cara é a: ",
    Pieces.Name,
    ", provida pela empresa ",
    Providers.Name,
    " e custa ",
    Provides.Price,
    " reais."
) as Msg FROM Provides
INNER JOIN Providers ON Provides.Provider=Providers.Code
INNER JOIN Pieces ON Provides.Piece=Pieces.Code
ORDER BY Price DESC
LIMIT 1;