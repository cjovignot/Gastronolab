"use client"
import Link from 'next/link'
import { useTranslation } from 'react-i18next';

const Card = ({props}) => {
    const { t } = useTranslation();

    const cardStyle = {
        width: '384px', // Set the desired width
        height: '300px', // Set the desired height
        backgroundImage: `url(${props.imagePath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '15px 15px 0px 0px'
    };

    return (
        <div className="card w-96 glass mx-2 mt-10">
            <div style={cardStyle}></div>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.content}</p>
                <div className="card-actions justify-end">
                <Link href={props.linkPath} className="btn btn-outline rounded-full btn-sm">{t("buttons.discover.title")}</Link>
                </div>
            </div>
        </div>
    )
}

export default Card;