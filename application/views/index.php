<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf8">
        <title>Catalog</title>
        
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
        <link rel="stylesheet" href="<?php echo base_url('assets/css/main.css') ?>" />


    </head>
    <body>
        <header><h1>Catalog</h1></header>
        
        <div class="container">
            <div class="row">
                <div class="col-xs-4">
                    <select class="price form-control">
                        <option value="0" selected="selected">All Prices</option>
                    </select>
                </div>
                <div class="col-xs-4">
                    <?php echo form_dropdown('', $sizes, '0', 'class="size form-control"') ?>
                </div>
                <div class="col-xs-4">
                    <?php echo form_dropdown('', $colors, '0', 'class="color form-control"') ?>
                </div>
            </div>
            <div class="row">
                
            </div>
        </div>
        
        <footer>Catalog&COPY; 2015</footer>
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="<?php echo base_url('assets/js/main.js') ?>"></script>
    </body>
</html>