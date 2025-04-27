// import { v2 as cloudinary } from 'cloudinary';

// transform and deliver the image

import { Cloudinary } from "@cloudinary/url-gen"
import { source } from '@cloudinary/url-gen/actions/overlay';
import { text } from '@cloudinary/url-gen/qualifiers/source';
import { TextStyle } from '@cloudinary/url-gen/qualifiers/textStyle';

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: 'dql0hdzie',
  },
  url: {
    secure: true,
  },
});


const getThumbnail = (title: string) => {
  const thumbnail = cloudinary
    .image(title)
    .overlay(
      source(text(title,
        new TextStyle('Cabin', 64).fontWeight('bold')
      ))
    )
  return thumbnail.toURL()
}


export { getThumbnail }




