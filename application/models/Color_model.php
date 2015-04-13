<?php

class Color_model extends CI_Model
{
    public function all()
    {
        return $this->db->get('colors')->result_array();
    }
}
