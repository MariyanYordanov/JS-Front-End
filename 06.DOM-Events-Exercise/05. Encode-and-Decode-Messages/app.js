/*
5. Encode and Decode Messages

In this problem, you should create a JS functionality that encodes and decodes
some messages which travel to the network.
This program should contain two functionalities.
The first one is to encode the given message and send it to the receiver.
The second one is to decode the received message and read it (display it).
When the [Encode and send it] button is clicked, you should get the given message from the first textarea. 
When you get the current message, you should encode it as follows:

· Change the ASCII CODE on every single character in that message when you add 1 to the current ASCII NUMBER, 
that represents the current character in that message

· Clear the sender textarea and add the encoded message to the receiver textarea
*/

function encodeAndDecodeMessages() {

    const input = document.querySelector('#main div:nth-child(1) textarea');
    const output = document. querySelector('#main div:nth-child(2) textarea');

    const btnEncode = document.querySelector('#main div:nth-child(1) button');
    const btnDecode = document.querySelector('#main div:nth-child(2) button');
    
    btnEncode.addEventListener('click', encode);
    btnDecode.addEventListener('click', decode);

    function encode() {
        const target = input.value;
        let result = '';

        for (let i = 0; i < target.length; i++) {
            result += String.fromCodePoint(target[i].charCodeAt(0)+1);
        }

        output.value = result;
        input.value = '';
        document.querySelector('#main div:nth-child(1) button').disabled = false;
    }

    function decode() {
        const target = output.value;
        let result = '';

        for (let i = 0; i < target.length; i++) {
            result += String.fromCodePoint(target[i].charCodeAt(0)-1);
        }

        input.value = result;
        document.querySelector('#main div:nth-child(2) button').disabled = true;
    }
}