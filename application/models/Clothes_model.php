<?php

class Clothes_model extends CI_Model
{
    public function find($filters)
    {
        //=========================================================
        $this->db->from('clothes');
        
        if (!empty($filters['price-from'])) {
            $price_from = $filters['price-from'];
            $this->db->where('price >=', $price_from);
        } else {
            $price_from = false;
        }
        
        if (!empty($filters['price-to'])) {
            $price_to = $filters['price-to'];
            $this->db->where('price <=', $price_to);
        } else {
            $price_to = false;
        }
        
        if (!empty($filters['size'])) {
            $size = $filters['size'];
            $this->db->where('size_id =', $size);
        } else {
            $size = false;
        }
        
        if (!empty($filters['color'])) {
            $color = $filters['color'];
            $this->db->where('color_id =', $color);
        } else {
            $color = false;
        }
        
        //=============================================
        $count = $this->db->get()->num_rows();
        //=========================================================
        
        $this->db->from('clothes');
        
        if ($price_from) {
            $this->db->where('price >=', $price_from);
        }
        
        if ($price_to) {
            $this->db->where('price <=', $price_to);
        }
        
        if ($size) {
            $this->db->where('size_id =', $size);
        }
        
        if ($color) {
            $this->db->where('color_id =', $color);
        }
        
        if (
            isset($filters['per-page'])
            && ($count > $filters['per-page'])
        ) {
            if (
                isset($filters['page'])
                && $filters['page'] > 0
                && (($count - ($offset = $filters['per-page'] * ($filters['page'] - 1))) > 0)
            ) {
                $this->db->limit($filters['per-page'], $offset);
            } else {
                $this->db->limit($filters['per-page']);
            }
        }
        
        $result['clothes'] = $this->db->get()->result_array();
        $result['count'] = $count;
        
        return $result;
    }
}
