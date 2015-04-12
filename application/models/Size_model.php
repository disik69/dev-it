<?php

class Size_model extends CI_Model
{
    public function get()
    {
        return $this->db->get('sizes')->result_array();
    }
}
