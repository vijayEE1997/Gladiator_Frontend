import { Injectable } from '@angular/core';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor() { 
  }

  uploadFile(file,Category,Brand,Name){

    const contentType = file.type;
    const bucket = new S3(
          {

          }
      );
      const params = {
          Bucket: 'wingbuy',
          Key:"Product/"+Category+"/"+Brand+"/"+Name,
          Body: file,
          ACL: 'public-read',
          ContentType: contentType
      };
      bucket.upload(params, function (err, data) {
          if (err) {
              console.log('There was an error uploading your file: ', err);
              return false;
          }
          console.log('Successfully uploaded file.', data);
          return true;
      });
//for upload progress   
bucket.upload(params).on('httpUploadProgress', function (evt) {
          console.log(evt.loaded + ' of ' + evt.total + ' Bytes');
      }).send(function (err, data) {
          if (err) {
              console.log('There was an error uploading your file: ', err);
              alert('There was an error uploading your file: ');
              return false;
          }
          console.log('Successfully uploaded file.', data);
          alert('Successfully uploaded file.');
          return true;
      });

}
}
