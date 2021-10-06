
CREATE TABLE IF NOT EXISTS `usuarios` (
  `usuid` INT NOT NULL AUTO_INCREMENT,
  `usuemail` VARCHAR(45) NOT NULL,
  `ususenha` VARCHAR(10) NOT NULL,
  `usutelefone` VARCHAR(11) NOT NULL,
  PRIMARY KEY (`usuid`))
ENGINE = InnoDB


CREATE TABLE IF NOT EXISTS `vendedores` (
  `venid` INT NOT NULL AUTO_INCREMENT,
  `usuid` INT NOT NULL,
  `vennome` VARCHAR(45) NULL,
  PRIMARY KEY (`venid`),
  INDEX `fk_vendedores_usuarios_idx` (`usuid` ASC),
  CONSTRAINT `fk_vendedores_usuarios`
    FOREIGN KEY (`usuid`)
    REFERENCES `usuarios` (`usuid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB



CREATE TABLE IF NOT EXISTS `enderecos` (
  `endid` INT NOT NULL AUTO_INCREMENT,
  `usuid` INT NOT NULL,
  `endcep` VARCHAR(8) NULL,
  `enduf` VARCHAR(2) NULL,
  `endcidade` VARCHAR(100) NULL,
  `endbairro` VARCHAR(50) NULL,
  `endrua` VARCHAR(45) NULL,
  `endnumero` INT NULL,
  `endnome` VARCHAR(45) NULL,
  PRIMARY KEY (`endid`),
  INDEX `fk_enderecos_usuarios1_idx` (`usuid` ASC),
  CONSTRAINT `fk_enderecos_usuarios1`
    FOREIGN KEY (`usuid`)
    REFERENCES `usuarios` (`usuid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB



CREATE TABLE IF NOT EXISTS `lojas` (
  `lojid` INT NOT NULL AUTO_INCREMENT,
  `venid` INT NOT NULL,
  `lojnomeempresa` VARCHAR(100) NULL,
  `lojcpf` VARCHAR(11) NULL,
  `lojcnpj` VARCHAR(14) NULL,
  `lojtelefone` VARCHAR(11) NULL,
  PRIMARY KEY (`lojid`),
  INDEX `fk_lojas_vendedores1_idx` (`venid` ASC),
  CONSTRAINT `fk_lojas_vendedores1`
    FOREIGN KEY (`venid`)
    REFERENCES `vendedores` (`venid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB


CREATE TABLE IF NOT EXISTS `categorias_produtos` (
  `catprodid` INT NOT NULL AUTO_INCREMENT,
  `catprodnome` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`catprodid`))
ENGINE = InnoDB




SET SQL_MODE=@OLD_SQL_MODE
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS



SELECT    u.usuid,  u.usuemail,  u.usutelefone, v.vennome,
          e.endcep, e.enduf,     e.endcidade,   e.endbairro, 
          e.endrua, e.endnumero, e.endnome,     l.lojnomeempresa,
          l.lojcpf, l.lojcnpj,   l.lojtelefone 
FROM      usuarios     AS u
LEFT JOIN vendedores   AS v ON u.usuid = v.usuid
LEFT JOIN enderecos    AS e ON u.usuid = e.usuid
LEFT JOIN lojas        AS l ON v.venid = l.venid

===============================================================

SELECT * FROM produtos AS p
LEFT JOIN imagens_produtos AS i ON p.prodid = i.prodid
===============================================================

SELECT u.usuid AS idusuario,  u.usuemail  AS email,   c.catprodid, v.vennome, c.catprodnome 
					     AS categoria,  p.prodnome  AS produto, p.proddescricao 
						   AS descricao,  p.prodvalor AS valor,   i.imgproid,  i.imgprocaminho 
						   AS caminho_da_imagem
						 
FROM      produtos            AS p
LEFT JOIN usuarios            AS u ON u.usuid     = p.usuid
LEFT JOIN imagens_produtos    AS i ON p.prodid    = i.prodid
LEFT JOIN categorias_produtos AS c ON c.catprodid = p.catprodid
LEFT JOIN vendedores          AS v ON u.usuid     = v.usuid

==============================================================================================================

SELECT    p.prodid, pm.promoid, p.prodnome, p.proddescricao, pm.promonome,
          pm.promodescricao , pm.promovalortotal, c.comqtde 
FROM      combo                    AS c 
LEFT JOIN promocoes                AS pm ON pm.promoid = c.promoid
LEFT JOIN produtos                 AS p  ON p.prodid   = c.prodid

==============================================================================================================

SELECT    p.prodid, pm.promoid, p.prodnome, pm.promonome,
                                  pm.promodescricao , pm.promovalortotal, c.comqtde 
                        FROM      combo     AS c 
                        LEFT JOIN promocoes AS pm ON pm.promoid = c.promoid
                        LEFT JOIN produtos  AS p  ON p.prodid   = c.prodid
                        WHERE pm.usuid = ?
================================================================================================================