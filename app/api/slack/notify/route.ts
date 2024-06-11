import {NextRequest, NextResponse} from "next/server";
import {WebClient} from '@slack/web-api';

const options = {};
const web = new WebClient(process.env.SLACK_TOKEN, options);



const POST = async (req: NextRequest) => {
    try {
        console.log(req)
        const message = await req.json()
        const channelId = process.env.SLACK_CHANNEL;
        console.log(channelId,message)
        const resp = await web.chat.postMessage({
            blocks: message,
            channel: channelId as string,
        });
        return NextResponse.json({ resp }, { status: 200 })
    } catch (error) {
        console.log(error)
        throw error
    }
}

export {
    POST,
}
