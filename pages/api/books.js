import {Save, Read} from '@/utils/helpers';
import booklist from '@/utils/booklist.json'
import {GoToPage} from '@/utils/function'
import { filtering,sorting } from '@/utils/filter';
export default async function handler(req, res) {

  //HELPER FUNCTIONS FOR YOU TO USE!
  //console.log(req.query, req.body)
  //await Save("test", json);
  //const files = await Read();

  //detect if filter/save/read
// const {txt,sort_rating, sort_type}=req.query
  var lists =[]
  
//   if(txt){
// lists =filtering(booklist,{
//   title:txt
// })}
//  if(sort_rating){
//   lists =sorting(lists,{
//      key:"average_rating",
//       type:sort_type
//    })
//  }

  var lists = GoToPage(lists,1,15);
  if(req.query.page){
    lists= GoToPage(booklist,req.query.page,15)
  }

  if(req.query.book_id){
    lists=booklist.filter(o=>o.bookID=== Number(req.query.book_id));
    console.log(lists)
  }
//  lists=lists.slice(0,15)

  // res.status(200).json(lists);
  res.status(200).json(lists);
}
