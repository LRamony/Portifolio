<?php
    //remover indices do array de sessao
    //unset()

    //destruir a variavel de sessão
    //session_destroy()

    session_start();
    session_destroy();
    header('Location: index.php');
?>