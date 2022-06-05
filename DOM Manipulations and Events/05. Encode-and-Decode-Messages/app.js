function encodeAndDecodeMessages() {
    let encodeTextArea = document.querySelector('#main div textarea');
    let decodeTextArea = document.querySelector('#main div:nth-child(2) textarea');


    //listeners
    document.querySelector('#main div button').addEventListener('click', onEncode);
    
    document.querySelector('#main div:nth-child(2) button').addEventListener('click', onDecode);
    
    function onEncode(){
        let msgToEncode = encodeTextArea.value.split('');
        let encodedMsg = msgToEncode.map(e => String.fromCharCode(e.charCodeAt() + 1)).join('');
        encodeTextArea.value = '';
        
        decodeTextArea.value = encodedMsg;

    }

    function onDecode(){
        let msgToDecode = decodeTextArea.value.split('');
        let decodedMsg = msgToDecode.map(e => String.fromCharCode(e.charCodeAt() - 1)).join('');

        decodeTextArea.value = decodedMsg;
    }
}