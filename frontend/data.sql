INSERT INTO produit (reference, libelle, prix, est_du_jour, quantite_en_stock) VALUES
('PRD001', 'Poudre de Fée Eryn Galen', 29.90, true, 17),
('PRD002', 'Anneau de Lune de Valinor', 149.00, false, 5),
('PRD003', 'Lanterne des Sylves Nocturnes', 74.50, false, 9);

INSERT INTO Client (id, motDePasse, nom, prenom, pseudo) VALUES 
(8, '$2a$10$xJPPXBELaEIK2PE7pZTNkewhcyNmUgyaBfjZC.eNs4NH/FaX5ypNO', 'DUPOND', 'Marie', 'PorteurAnneau'),
(9, '$2a$10$Zi4udv8oY3jjkxvBIq7UHuZOQj7NU43yTPgxwMVQLSk/FLDPpy606', 'Gamgee', 'Sam', 'JardinierLoyal'),
(10, '$2a$10$1c3CwuevPssQSS3ojIhZQ.3r9qGLiRncspb/odI21H8fjvPKmVomG', 'Brandybuck', 'Meriadoc', 'Merry'),
(11, '$2a$10$x77FGB1wOFnPOAf2T8HCNOcdl8igwwTa0nTPgp/3IwkVXnF0cOWmi', 'Took', 'Peregrin', 'Pippin'),
(12, '$2a$10$FFmYPsR/v2uetKWhex9V6.ACufGpEbwMDdQ0ukqcZygxZD87vQ8Sy', 'Greenleaf', 'Legolas', 'ElfeArcher');
