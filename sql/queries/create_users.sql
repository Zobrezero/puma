USE 'puma';

CREATE USER 'puma_admin'@'localhost' IDENTIFIED BY 'puma_admin_password';
GRANT ALL PRIVILEGES ON puma . * TO 'puma_admin'@'localhost';

CREATE USER 'puma_webuser'@'localhost' IDENTIFIED BY 'puma_webuser_password';
GRANT SELECT, INSERT, UPDATE ON puma . * TO 'puma_webuser'@'localhost';