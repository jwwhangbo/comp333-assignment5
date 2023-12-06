<?php
use PHPUnit\Framework\TestCase;
use GuzzleHttp\Client;
use GuzzleHttp\RequestOptions;

class BackendTest extends TestCase
{
    private $url = 'http://localhost';

    public function testGet_UserList(): void
    {

         // create our http client (Guzzle)
         $client = new Client([
            'base_uri' => $this->url,
            'request.options' => [
                'exceptions' => false,
            ]
        ]);
        $response = $client->get(
            '/ratings'
        );
        
        $this->assertEquals(201, $response->getStatusCode());
    }
    
    public function testPost_CreateUser(): void
    {
        // create our http client (Guzzle)
        $client = new Client([
            'base_uri' => $this->url,
            'request.options' => [
                'exceptions' => false,
            ]
        ]);

        $data = array(
            'username' => 'lumiumiiii',
            'password' => 'password123',
        );

        $response = $client->post('/register', [
            RequestOptions::FORM_PARAMS => $data
        ]);
        $this->assertEquals(201, $response->getStatusCode());
    }
    public function testPost_LoginUser(): void
    {
        $client = new Client([
            'base_uri' => $this->url,
            'request.options' => [
                'exceptions' => false,
            ]
        ]);

        $data = array(
            'username' => 'PelumiTayo',
            'password' => 'mimi4life',
        );

        $response = $client->post(
            '/login',
            [RequestOptions::FORM_PARAMS => $data]
        );
        $this->assertEquals(201, $response->getStatusCode());
    }
    public function testPost_FailedLogin(): void
    {
        // create our http client (Guzzle)
        $client = new Client([
            'base_uri' => $this->url,
            'request.options' => [
                'exceptions' => false,
            ]
        ]);

        $data = array(
            'username' => 'MissGoodWuss',
            'password' => 'missgoodwuss',
        );
        $response = $client->post(
            '/login',
            [RequestOptions::JSON => $data]
        );
        $this->assertEquals(201, $response->getStatusCode());
    }
    public function testPost_NewSong(): void
    {
        // create our http client (Guzzle)
        $client = new Client([
            'base_uri' => $this->url,
            'request.options' => [
                'exceptions' => false,
            ]
        ]);

        $data = array(
            'username' => 'PelumiTayo',
            'artist' => 'Asake',
            'rating' => '5',
            'title' => 'Amapiano'
        );

        $response = $client->post('/ratings', [
            RequestOptions::FORM_PARAMS => $data
        ]);

        $this->assertEquals(201, $response->getStatusCode());
    }

    public function testPost_updateSong(): void
    {
        // create our http client (Guzzle)
        $client = new Client([
            'base_uri' => $this->url,
            'request.options' => [
                'exceptions' => false,
            ]
        ]);

        $data = array(
            'id' => '35',
            'username' => 'PelumiTayo',
            'artist' => 'Asake',
            'rating' => '5',
            'title' => 'Awodi'
        );

        $response = $client->patch(
            '/ratings',
            [RequestOptions::JSON => $data]
        );

        $this->assertEquals(201, $response->getStatusCode());
    }
    public function testPost_DeleteSong(): void
    {
        // create our http client (Guzzle)
        $client = new Client([
            'base_uri' => $this->url,
            'request.options' => [
                'exceptions' => false,
            ]
        ]);

        $data = array(
            'id' => '35'
        );

        $response = $client->delete(
            '/ratings',
            [RequestOptions::JSON => $data]
        );

        $this->assertEquals(200, $response->getStatusCode());
    }

}
?>