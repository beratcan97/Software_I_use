# Software-I-use

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

## For Windows

### 1. Install Visual studio code
Or any other code editor
### 2. Install Scout-app
Or any other sass
### 3. Install node.js
### 4. Install Postman
### 5. Install MAMP
### 6. Install Chocolatey
Run the cmd as administrator
>@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

>exit

>choco install php -y

### 7. Install Composer
Easy Installation with .exe file

### 8. Install php-cs-fixer
Run the cmd as administrator
>composer global require friendsofphp/php-cs-fixer

>export PATH="$PATH:$HOME/.composer/vendor/bin"

# HAPPY COODING!

## How to use

# To run php in console

> php -S localhost:3000 -t src/public

# Wordpress login page

> http://localhost/wp-login.php
