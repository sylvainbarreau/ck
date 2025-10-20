@echo off
echo Demarrage du serveur HTTP local sur le port 8000...
echo.
echo Ouvrir dans le navigateur: http://localhost:8000/ck.html
echo.
echo Appuyer sur Ctrl+C pour arreter le serveur
echo.
python -m http.server 8000
