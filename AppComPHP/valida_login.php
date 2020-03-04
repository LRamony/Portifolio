<?php
    session_start();

    $usuario_autenticado = false;
    $usuario_id = null;
    $perfis = array(1 => 'Administrativo', 2 => 'Usuario');
    $usuario_perfil_id = null;

    $usuarios_app = array(
        array('id' => 4,'email' => 'maria@hotmail.com', 'senha' => 'bug', 'perfil' => 2),
        array('id' => 2,'email' => 'user@hotmail.com', 'senha' => 'bug', 'perfil' => 1),
        array('id' => 1,'email' => 'adm@hotmail.com', 'senha' => 'bug', 'perfil' => 1),
        array('id' => 3,'email' => 'jose@hotmail.com', 'senha' => 'bug', 'perfil' => 2),
    );
/*
    echo '<pre>';
    print_r($usuarios_app);
    echo '</pre>';
 */

    foreach($usuarios_app as $user){
        if($user['email'] == $_POST['email'] && $_POST['senha'] == $user['senha']){
            $usuario_autenticado = true;
            $usuario_id = $user['id'];
            $usuario_perfil_id = $user['perfil'];
            print_r($user);
        }
    }

    if($usuario_autenticado){
        $_SESSION['autenticado'] = 'SIM';
        $_SESSION['id'] = $usuario_id;
        $_SESSION['perfil'] = $usuario_perfil_id; 
        header('Location: home.php');
    }else{
        $_SESSION['autenticado'] = 'NAO';
        header('Location: index.php?login=UsuarioInvalido');
    }
?>