// Trecho do Script que verifica e manipula o inventário:

Script: if ($gameParty.numItems($dataItems[5]) >= 1 && $gameParty.numItems($dataItems[6]) >= 1 
        && $gameParty.numItems($dataItems[7]) >= 1) { 
        // 1. Perde os ingredientes (Itens 5, 6 e 7)
        $gameParty.loseItem($dataItems[5],1); $gameParty.loseItem($dataItems[6],1); 
        // 2. Ganha o Antídoto (Item 1)
        $gameParty.gainItem($dataItems[1],1);
        $gameMessage.add("Você criou um Antídoto!");
} else {
        $gameMessage.add("Ingredientes faltando: " + [vetor de ingredientes faltando]);
}

