# Cloud Computing & Software Development

Source code of the application developed during the Cloud Computing &amp; Software Development course on AAI study program on Singidunum University

This application is an example used to teach the deployment process during the exercises

## Deploymnet

Example deploymnet script:
```bash
#!/bin/bash
cd /tmp
rm -rf cloud-computing-and-software-development-2025
git clone https://github.com/medwedizaa/cloud-computing-and-software-development-2025

cd cloud-computing-and-software-development-2025
rm -rf /var/www/html/*
mv ./src/* /var/www/html

echo 'Done :)'
```