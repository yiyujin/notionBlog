import Image from 'next/image'
import Link from 'next/link'

//project.js에서 aProject가 data.
export default function ProjectItem({data}){

    // 데이터 정리
    const test = data.properties.Name.title
    // console.log(data.properties.Name.title.length) 

    let projectTitle;

    const date = data.properties.Date.formula.string

    const category = data.properties.Category.select.name

    const tags = data.properties.Tags.multi_select

    const days = data.properties.Days.formula.string

    const pageId = data.id

    const url = data.url

    if(test == 0){
        projectTitle = "Untitled"
    }else{
        projectTitle = data.properties.Name.title[0].plain_text
    }

    let imgSrc;

    if(data.icon == null || data.icon.type == "emoji"){
        imgSrc = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/114e93c1-ca6a-47a9-90e3-984288179fe7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220811T065318Z&X-Amz-Expires=86400&X-Amz-Signature=1f332055e6b61cc8097666af7db54b21f02d18ea59f34978b5d5ecc6240d0b04&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject"
    }else if(data.icon.type == "external"){
        imgSrc = data.icon.external.url
    }else if(data.icon.type == "file"){
        imgSrc = data.icon.file.url
    }

    let cateColor;
    let icon;

    const icons = {
        "earth" : "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/96a7fbd2-b822-4a8f-8728-a558faaecc00/Earth_globe_asia-australia.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220811T133110Z&X-Amz-Expires=86400&X-Amz-Signature=0a401806075adb0d4632370401bcd28f28a721c1cf9204bf3c62636768f0f020&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Earth%2520globe%2520asia-australia.png%22&x-id=GetObject",
        "rock" : "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/41dae367-9f86-496e-a65c-07c249a16012/0_-_Default.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220811T132153Z&X-Amz-Expires=86400&X-Amz-Signature=4d6a10d14aa063b42b0d22f869348bfc2c8b584c064418ef27afa165fc12163e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%220%2520-%2520Default.png%22&x-id=GetObject",
        "bolt" :"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5248efa3-3b07-4001-8eb0-05b9b507ef9f/High_voltage_sign.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220811T132155Z&X-Amz-Expires=86400&X-Amz-Signature=0343111c7ee14987a263b3d195a0d0bbee8dc81ede87455ea894bef1fddd2db8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22High%2520voltage%2520sign.png%22&x-id=GetObject",
        "clover" :"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/dfb5d568-e027-487f-860a-668c017065fd/Shamrock.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220811T132158Z&X-Amz-Expires=86400&X-Amz-Signature=8c93042d146dc4db51e09817c4dafc050420498b1f4c570a6a753544ea1cc084&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Shamrock.png%22&x-id=GetObject",
        "sun" :"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5af62f57-c9b8-4fc8-b246-893d21d4b44e/Sun_with_rays.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220811T132201Z&X-Amz-Expires=86400&X-Amz-Signature=8cee6c80b7cb92b1f0cef3e65681b6608c326e850a6eab2b1c6ff317e8518f10&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Sun%2520with%2520rays.png%22&x-id=GetObject",
        "cloud" :"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fd1866b5-f7d7-4257-852d-96147799ff9d/Thought_balloon.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220811T132204Z&X-Amz-Expires=86400&X-Amz-Signature=56f899d44573466a7b6ece0bdcc70c6579e8303b3a95c600140ead51d523419c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Thought%2520balloon.png%22&x-id=GetObject",
        "riceball" : "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0f777ab6-128d-4fca-9308-01257a59d808/Rice_ball.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220811T133114Z&X-Amz-Expires=86400&X-Amz-Signature=7d1e7033790a4958a119ddceaf243d1dfe4d41fb06080a4037eb4b65e7c75621&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Rice%2520ball.png%22&x-id=GetObject",
        "butterfly" : "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/219f5c6e-b2ea-496b-8db9-8bb7c886c32b/Butterfly.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220811T133118Z&X-Amz-Expires=86400&X-Amz-Signature=8ef0c7797c5042f4419b9c81a69f2a8fd0fdc2cf4f4c64180f01414ec81cbef6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Butterfly.png%22&x-id=GetObject"
    }

    if(category == "Study"){
        cateColor = "Study",
        icon = icons['earth']
    }else if(category == "Read"){
        cateColor = "Read",
        icon = icons['butterfly']
    }else if(category == "Watch"){
        cateColor = "Watch",
        icon = icons['bolt']
    }else if(category == "Experience"){
        cateColor = "Experience",
        icon = icons['clover']
    }else if(category == "Review"){
        cateColor = "Review",
        icon = icons['sun']
    }else if(category == "Think"){
        cateColor = "Think",
        icon = icons['cloud']
    }

    return(
        <>
        <Link href={`${data.url}`}>
        <div className="projectItem bg-white mb-4 rounded-3xl drop-shadow-sm">

            <div className='imgContainer'>
                <Image className='thumbnail' src={imgSrc} width="300px" height="301px" objectFit="contain"></Image>
            </div>
            
            <div className={cateColor}>
                <div className='textContainer pt-4 ml-4 mr-4 text-white'>
                    <div className='titles flex flex-row align-middle'>
                        <Image src={icon} width="14px" height="14px" objectFit='contain'></Image>
                        <p className='ml-1 mr-2 text-sm font-medium'>{category}</p>
                            {tags.map((aTag) => (
                                <p className='mr-2 opacity-80 text-sm font-medium' key={aTag.id}>{"// " + aTag.name}</p>
                            )
                            )}
                    </div>

                    <h1 className='projectTitle'>{projectTitle}</h1>

                    <div className='dates text-xs flex flex-row pb-4'>
                        <p className='mr-2'>{days}</p>
                        <p className=''>{date}</p>
                    </div>
                </div>
            </div>            
        </div>
        </Link>
        </>
    )
}