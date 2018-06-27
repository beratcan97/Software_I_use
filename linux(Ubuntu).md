## For Ubuntu

### 1. Install Apache
> sudo apt-get install apache2

Gives permision the modify html folder
> sudo chmod 777 /var/www/html

### 2. Install MySQL
> sudo apt-get install mysql-server

### 3. Install PHP
> sudo apt-get install php-pear php-fpm php-dev php-zip php-curl php-xmlrpc php-gd php-mysql php-mbstring php-xml libapache2-mod-php

### 4. Restart Server
> sudo service apache2 restart

### 5. Check Apache
Open a web browser and navigate to http://localhost/. You should see a message saying It works!

### 6. Check PHP
> php -r 'echo "\n\nYour PHP installation is working fine.\n\n\n";'

### 7. Choose PHP files instand of html
> sudo nano /etc/apache2/mods-enabled/dir.conf
write index.php before index.html

### 8. Restarts 
> sudo systemctl restart apache2

### 9. Install phpMyAdmin
> sudo apt-get phpmyadmin
choose apache2 with space
choose root as password

### 10. Install git
> sudo apt-get update
> sudo apt-get install git

### 11. Install Visual studio code
Or any other code editor

### 12. Install Nodejs and npm
> sudo apt-get update
> sudo apt-get install nodejs
> sudo apt-get install npm

### 13 Install Angular
> npm install -g @angular/cli
