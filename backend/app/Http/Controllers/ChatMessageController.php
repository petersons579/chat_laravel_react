<?php

namespace App\Http\Controllers;

use App\Models\ChatMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ChatMessageController extends Controller
{
    public function index()
    {
        return ChatMessage::with('user')->get();
    }

    public function create()
    {
        for ($i=0;$i<5;$i++):
            ChatMessage::create([
                'chat_id' => 1,
                'user_id' => 2,
                'text'    => 'Teste '.($i+1)
            ]);
        endfor;

        return true;
    }

    public function store(Request $request)
    {
        $data = $request->all();

        $insert = ChatMessage::create([
            'chat_id' => 1,
            'user_id' => $data['user'],
            'text'    => $data['message']
        ]);

        return $insert;
    }
}
