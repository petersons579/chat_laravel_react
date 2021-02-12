# LARAVEL BROADCASTING COM REDIS, REACT E SOCKETIO



Projeto utilizando o laravel como backend para comunicação real-time utilizando as seguintes tecnologias:

  - React no front
  - SocketIO
  - Redis como driver de fila
  - Laravel Echo

## Passos para executar o projeto

Você precisa ter o [Laravel](https://laravel.com/docs/8.x) na versão 8 e do [Npm](https://www.npmjs.com/get-npm) para executar o projeto.

Para rodar o projeto precisaremos dos seguintes artificios:
   - Redis (Instale e configure antes)
   - Laravel Echo Server
   - SocketIO + Echo para client no React
   - Banco de Dados Mysql

Instale antes e execute o Redis na sua maquina e siga a [documentação](https://laravel.com/docs/8.x/broadcasting#introduction) para configrar o Redis como driver de fila no laravel, segue abaixo um pequeno resumo:
 - Antes de tudo utilize o **composer install** na pasta backend/ para adicionar todos os pacotes necessários
 - Defina "redis" na chave BROADCAST_DRIVER e QUEUE_CONNECTION do arquivo .env
 - Adicione o host, porta e senha do redis no .env, caso necessário as configurações **databaseConfig** no arquivo backend/laravel-echo-server.lock

Instalando o **laravel-echo-server**

Utilize os comandos abaixo para instalar [laravel-echo-server](https://github.com/tlaverdure/laravel-echo-server)

```sh
$ cd backend
$ npm install -g laravel-echo-server
```

Adicione os pacotes do laravel echo e do socket io no React
```sh
$ cd frontend
$ npm i laravel-echo socket.io-client
```

**Nota**

A configuração devModeconfiguração esta setada como true.

### Executando o projeto

Depois de executar as configurações básicas, rode os seguintes comandos:

Execute as migrations:
```sh
$ cd backend
$ php artisan migration
```

Seedind no banco de dados:
```sh
$ cd backend
$ php artisan db:seed
```

Execute o projeto laravel:
```sh
$ cd backend
$ php artisan serve
```

Execute o trabalho das filas:
```sh
$ cd backend
$ php artisan queue:listen
```

Inicie o laravel echo server:
```sh
$ cd backend
$ laravel-echo-server start
```

Execute o projeto react:
```sh
$ cd frontend
$ npm start
```

Utilize a rota **http://localhost:8000/generateMessage** para testes (Esta rota insere cinco registros no banco).

#### (Opcional) Utilizando o Supervisor no Linux

Se for de interesse pode-se utilizar o [supervisor](http://supervisord.org/running.html) para rodar os trabalhos das filas e o processo do laravel echo server.

Segue os paços para utilização e instalação em SO linux:

Utilize o comando para instalação:
```sh
$ sudo apt install supervisor
```

Acesse o diretorio /etc/supervisor/conf.d para inserir os arquivos de configuração, segue abaixo os exemplos dos arquivos

**laravel_echo.conf**
```
[program:echo_server]
directory=/home/usuario/projeto/backend (Diretorio onde se encontra o projeto)
command=/usr/local/bin/laravel-echo-server start --force (E importante verificar o diretorio correto onde seu laravel echo foi instalado)
autostart=true
autorestart=true
user=seu_usuario
redirect_stderr=true
stdout_logfile=diretorio onde os logs vão ficar armazenado
```

**laravel_worker.conf**
```
[program:laravel_worker]
process_name=%(program_name)s_%(process_num)02d (Não e necessário alterar essa linha)
command=php /home/usuario/projeto/backend/artisan queue:listen --tries=3 (Confira o diretorio onde se encontra o projeto)
autostart=true
autorestart=true
stoppasgroup=true
user=seu_usuario
numprocs=8
stdout_logfile=diretorio onde os logs vão ficar armazenado
stopwaitsecs=3600
```

Depois de adicionar os arquivos de consfiguração e necessário rodar os seguintes comandos para que o supervisor leia esses arquivos:
```sh
$ supervisorcl reread
$ supervisorctl update
```