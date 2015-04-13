<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Catalog extends CI_Controller
{
    public function index()
    {
        $data['sizes'][0] = 'All Sizes';
        $data['sizes'] = array_merge(
            $data['sizes'],
            prepare_dropdown($this->size->all(), 'id', 'name')
        );
        
        $data['colors'][0] = 'All Colors';
        $data['colors'] = array_merge(
            $data['colors'],
            prepare_dropdown($this->color->all(), 'id', 'name')
        );

        $this->load->view('index', $data);
    }

    public function clothes()
    {
        $status_code = 400;
        $content = array('error');
        
        if (
            $this->input->is_ajax_request()
            && ($this->input->server('REQUEST_METHOD') === 'GET')
        ) {
            $status_code = 200;
            $content = $this->clothes->find($this->input->get());
        }

        $this->output->set_status_header($status_code);
        echo json_encode($content);
    }
}
