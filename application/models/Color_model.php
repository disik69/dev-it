<?php

class Color_model extends CI_Model
{
    public function get()
    {
        return $this->db->get('colors')->result_array();
    }
}
