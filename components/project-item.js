import Image from 'next/image'

//project.js에서 aProject가 data.
export default function ProjectItem({data}){

    // 데이터 정리
    const projectTitle = data.properties.Name.title[0].plain_text

    const date = data.properties.Date.formula.string

    const category = data.properties.Category.select.name

    const tags = data.properties.Tags.multi_select

    let imgSrc;

    if(data.icon == null || data.icon.type == "emoji"){
        imgSrc = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/114e93c1-ca6a-47a9-90e3-984288179fe7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220811T065318Z&X-Amz-Expires=86400&X-Amz-Signature=1f332055e6b61cc8097666af7db54b21f02d18ea59f34978b5d5ecc6240d0b04&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject"
    }else if(data.icon.type == "external"){
        imgSrc = data.icon.external.url
    }else if(data.icon.type == "file"){
        imgSrc = data.icon.file.url
    }

    let cateColor;

    if(category == "Study"){
        cateColor = "Study"
    }else if(category == "Read"){
        cateColor = "Read"
    }else if(category == "Watch"){
        cateColor = "Watch"
    }else if(category == "Experience"){
        cateColor = "Experience"
    }else if(category == "Review"){
        cateColor = "Review"
    }else if(category == "Think"){
        cateColor = "Think"
    }


    return(
        <>
        <div className="projectItem bg-white mb-4 rounded-3xl drop-shadow-sm">

            <div className='imgContainer'>
                <Image className='thumbnail' src={imgSrc} width="300px" height="301px" objectFit="contain"></Image>
            </div>
            
            <div className={cateColor}>
                <div className='textContainer'>
                    <div className='titles flex flex-row'>
                        <p className='mr-2'>{category}</p>
                            {tags.map((aTag) => (
                                <p className='mr-2 opacity-80' key={aTag.id}>{"// " + aTag.name}</p>
                            )
                            )}
                    </div>

                    <h1 className='projectTitle'>{projectTitle}</h1>

                    <h1 className='date opacity-80'>{date}</h1>
                </div>
            </div>            
        </div>
        </>
    )
}