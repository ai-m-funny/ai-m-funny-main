
CREATE TABLE IF NOT EXISTS `users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NULL,
  `provider_id` VARCHAR(45) NULL,
  `provider` VARCHAR(45) NULL,
  PRIMARY KEY (`idusers`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `images` (
  `idimages` INT NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(45) NULL,
  `votes` VARCHAR(45) NULL,
  `username` VARCHAR(45) NULL,
  `contestname` VARCHAR(45) NULL,
  PRIMARY KEY (`idimages`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `contests` (
  `idcontests` INT NOT NULL AUTO_INCREMENT,
  `starttime` DATETIME NULL,
  `endtime` DATETIME NULL,
  `contestname` VARCHAR(45) NULL DEFAULT 'current',
  PRIMARY KEY (`idcontests`),
  UNIQUE INDEX `contestname_UNIQUE` (`contestname` ASC) VISIBLE)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `sessions` (
  `idsessions` INT NOT NULL AUTO_INCREMENT,
  `expire` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `username` VARCHAR(45) NULL,
  `sid` VARCHAR(45) NULL,
  `sess` VARCHAR(45) NULL,
  PRIMARY KEY (`idsessions`))
ENGINE = InnoDB;