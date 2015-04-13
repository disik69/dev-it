<?php

class Size_model extends CI_Model
{
    public function all()
    {
        return $this->db->get('sizes')->result_array();
    }
}
