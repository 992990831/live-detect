export const GetSessionCode = async (token: string) => {
    const url = `https://aip.baidubce.com/rest/2.0/face/v1/faceliveness/sessioncode?access_token=${token}`;

    // fetch(url, {
    //     method: "POST",
    //     mode: 'cors',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         'type': 1
    //     })
    // }).then(response => response.json()).then(json => { 
    //     alert(json.result.session_id);
    // })

    let json = await fetch(url, {
        method: "POST",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'type': 1
        })
    }).then(response => response.json()).catch(error => {
        alert(error);
    });
    
    return json.result.session_id;
}

export const VideoVerify = async (token:string, sessionCode: string, videoBase64: string) => {
    const url = `https://aip.baidubce.com/rest/2.0/face/v1/faceliveness/verify?access_token=${token}`;

    // let formData = new FormData();
    // formData.append("session_id", sessionCode)
    // formData.append("lip_identify", "OFF")
    // formData.append("video_base64", videoBase64)

    let json = await fetch(url, {
        method: "POST",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'//'application/json;charset=UTF-8'
        },
        body: `type_identify=action&video_base64=${videoBase64}&session_id=${sessionCode}`
        
        // JSON.stringify({
        //     'type_identify': 'action',
        //     'video_base64': videoBase64,
        //     'session_id': sessionCode
        // })
    }).then(response => response.json()).catch(error => {
        alert(error);
    });
    //alert(JSON.stringify(json));
    //alert(json.result.score);
    return json.result.score;
}