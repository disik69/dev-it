<?php

class Clothes_model extends CI_Model
{
    public function get()
    {
        return $this->db->get('clothes')->result_array();
    }
}
