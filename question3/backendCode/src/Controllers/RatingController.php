<?php

namespace src\Controllers;
require 'BaseController.php';
require $_SERVER['DOCUMENT_ROOT'].'/src/Models/RatingModel.php';

use src\Models\RatingModel;

class RatingController extends BaseController
{
    public function __construct()
    {
        $this->model = new RatingModel();
    }

    /**
     * @return null
     */
    function show(array|null $key=null): null  {
        if ($key != null) {
            $result = $this->model->retrieve();
        }
        else {
            $result = $this->model->retrieve($key);
        }
        for ($__i__ = 0; $__i__ < count($result); $__i__++) {
            foreach ($result[$__i__] as $key => $value) {
                if (gettype($value) == 'string') {
                    $result[$__i__][$key] = htmlspecialchars_decode($value);
                }
            }
        }
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($result);
        return null;
    }

    /**
     * @param array $request
     * @return bool
     */
    function store(array $request): bool {

        try {
            $rows = $this->model->retrieve(array('username' => $request['username'], 'title' => $request['title']));
            if (count($rows) > 0) {
                echo "duplicate";
                return false;
            }
        } catch (\Exception $e) {
            http_response_code(500);
            echo $e;
            return false;
        }

        try {
            if ($this->model->create($request)) {
                $rows = $this->model->retrieve($request);
                $new_rating = $rows[0];
                http_response_code(201);
                echo json_encode(array_slice($new_rating, 0, 1));
                return true;
            }
            else {
                echo false;
                return false;
            }
        } catch (\Exception $e) {
            http_response_code(500);
            echo $e;
            return false;
        }
    }

    /**
     * @param array $request
     * @return bool
     */
    function update(array $request): bool{
        try {
            if ($this->model->update($request,array('id'=>$request['id']) )){
                http_response_code(201);
                echo true;
                return true;
            }
            else {
                echo false;
                return false;
            }
        } catch (\Exception $e) {
            http_response_code(500);
            echo $e;
            return false;
        }
    }

    /**
     * @param array $request
     * @return bool
     */
    function delete(array $request): bool {
        try {
            if ($this->model->delete($request)){
                echo true;
                return true;
            }
            else{
                echo false;
                return false;
            }
        } catch (\Exception $e) {
            http_response_code(500);
            echo $e;
            return false;
        }
    }
}

