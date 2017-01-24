var searchIndex = {};
searchIndex["memcached_bpr"] = {"doc":"Nom based decoder for Memcached Binary Packet Protol","items":[[4,"IResult","memcached_bpr","Holds the result of parsing functions",null,null],[13,"Done","","indicates a correct parsing, the first field containing the rest of the unparsed data, the second field contains the parsed data",0,null],[13,"Error","","contains a Err, an enum that can indicate an error code, a position in the input, and a pointer to another error, making a list of errors in the parsing tree",0,null],[13,"Incomplete","","Incomplete contains a Needed, an enum than can represent a known quantity of input data, or unknown",0,null],[4,"Needed","","Contains information on needed data if a parser returned `Incomplete`",null,null],[13,"Unknown","","needs more data, but we do not know how much",1,null],[13,"Size","","contains the required data size",1,null],[4,"ErrorKind","","indicates which parser returned an error",null,null],[13,"Custom","","",2,null],[13,"Tag","","",2,null],[13,"MapRes","","",2,null],[13,"MapOpt","","",2,null],[13,"Alt","","",2,null],[13,"IsNot","","",2,null],[13,"IsA","","",2,null],[13,"SeparatedList","","",2,null],[13,"SeparatedNonEmptyList","","",2,null],[13,"Many0","","",2,null],[13,"Many1","","",2,null],[13,"ManyTill","","",2,null],[13,"Count","","",2,null],[13,"TakeUntilAndConsume","","",2,null],[13,"TakeUntil","","",2,null],[13,"TakeUntilEitherAndConsume","","",2,null],[13,"TakeUntilEither","","",2,null],[13,"LengthValue","","",2,null],[13,"TagClosure","","",2,null],[13,"Alpha","","",2,null],[13,"Digit","","",2,null],[13,"HexDigit","","",2,null],[13,"OctDigit","","",2,null],[13,"AlphaNumeric","","",2,null],[13,"Space","","",2,null],[13,"MultiSpace","","",2,null],[13,"LengthValueFn","","",2,null],[13,"Eof","","",2,null],[13,"ExprOpt","","",2,null],[13,"ExprRes","","",2,null],[13,"CondReduce","","",2,null],[13,"Switch","","",2,null],[13,"TagBits","","",2,null],[13,"OneOf","","",2,null],[13,"NoneOf","","",2,null],[13,"Char","","",2,null],[13,"CrLf","","",2,null],[13,"RegexpMatch","","",2,null],[13,"RegexpMatches","","",2,null],[13,"RegexpFind","","",2,null],[13,"RegexpCapture","","",2,null],[13,"RegexpCaptures","","",2,null],[13,"TakeWhile1","","",2,null],[13,"Complete","","",2,null],[13,"Fix","","",2,null],[13,"Escaped","","",2,null],[13,"EscapedTransform","","",2,null],[13,"TagStr","","",2,null],[13,"IsNotStr","","",2,null],[13,"IsAStr","","",2,null],[13,"TakeWhile1Str","","",2,null],[13,"NonEmpty","","",2,null],[13,"ManyMN","","",2,null],[13,"TakeUntilAndConsumeStr","","",2,null],[13,"TakeUntilStr","","",2,null],[13,"Not","","",2,null],[13,"Permutation","","",2,null],[0,"opcode","","Binary Packet Protocols",null,null],[4,"OpCode","memcached_bpr::opcode","Memcache Opcodes",null,null],[13,"Get","","",3,null],[13,"Set","","",3,null],[13,"Add","","",3,null],[13,"Replace","","",3,null],[13,"Delete","","",3,null],[13,"Increment","","",3,null],[13,"Decrement","","",3,null],[13,"Quit","","",3,null],[13,"Flush","","",3,null],[13,"GetQ","","",3,null],[13,"Nop","","",3,null],[13,"Version","","",3,null],[13,"GetK","","",3,null],[13,"GetKQ","","",3,null],[13,"Append","","",3,null],[13,"Prepare","","",3,null],[13,"Stat","","",3,null],[13,"SetQ","","",3,null],[13,"AddQ","","",3,null],[13,"ReplaceQ","","",3,null],[13,"DeleteQ","","",3,null],[13,"IncrementQ","","",3,null],[13,"DecrementQ","","",3,null],[13,"QuitQ","","",3,null],[13,"FlushQ","","",3,null],[13,"AppendQ","","",3,null],[13,"PrependQ","","",3,null],[13,"RGet","","",3,null],[13,"RSet","","",3,null],[13,"RSetQ","","",3,null],[13,"RAppend","","",3,null],[13,"RAppendQ","","",3,null],[13,"RPrepend","","",3,null],[13,"RPrependQ","","",3,null],[13,"RDelete","","",3,null],[13,"RDeleteQ","","",3,null],[13,"RIncr","","",3,null],[13,"RIncrQ","","",3,null],[13,"RDecr","","",3,null],[13,"RDecrQ","","",3,null],[5,"opcode_parse","","Parses an OpCode from a packet.",null,null],[11,"clone","","",3,null],[11,"fmt","","",3,null],[11,"eq","","",3,null],[11,"into","","Converts an OpCode into it&#39;s byte code (at no\ncomputation cost) for encoding",3,null],[11,"encode","","Writes opcode into `buffer[1]`",3,null],[11,"get_opcode","","",3,null],[0,"status","memcached_bpr","Status Codes for Response Packets",null,null],[4,"StatusField","memcached_bpr::status","Status Field",null,null],[13,"NoError","","",4,null],[13,"KeyNotFound","","",4,null],[13,"KeyExists","","",4,null],[13,"ValueTooLarge","","",4,null],[13,"InvalidArguments","","",4,null],[13,"ItemNotStored","","",4,null],[13,"IncrDecrNonNumeric","","",4,null],[13,"VBucketNotHere","","",4,null],[13,"AuthError","","",4,null],[13,"AuthContinue","","",4,null],[13,"UnknownCommand","","",4,null],[13,"OutOfMemory","","",4,null],[13,"NotSupported","","",4,null],[13,"InternalError","","",4,null],[13,"Busy","","",4,null],[13,"TemporaryFailure","","",4,null],[5,"status_parse","","Parses a StatusField from a packet",null,null],[11,"clone","","",4,null],[11,"fmt","","",4,null],[11,"eq","","",4,null],[11,"status","","Base implementatin of status method",4,null],[11,"into","","",4,null],[11,"encode","","Encodes value into packet",4,null],[0,"request","memcached_bpr","RequestHeaders/Packets",null,null],[3,"ReqHeader","memcached_bpr::request","Memcached Request Packet Header",null,null],[3,"Request","","Memcached Request Packet",null,null],[5,"parse_req_header","","",null,null],[5,"parse_request","","",null,null],[11,"clone","","",5,null],[11,"fmt","","",5,null],[11,"eq","","",5,null],[11,"ne","","",5,null],[11,"get_opcode","","",5,null],[11,"get_keylen","","",5,null],[11,"get_extralen","","",5,null],[11,"get_bodylen","","",5,null],[11,"get_opaque","","",5,null],[11,"get_cas","","",5,null],[11,"encode","","",5,null],[11,"clone","","",6,null],[11,"fmt","","",6,null],[11,"get_opcode","","",6,null],[11,"get_keylen","","",6,null],[11,"get_extralen","","",6,null],[11,"get_bodylen","","",6,null],[11,"get_opaque","","",6,null],[11,"get_cas","","",6,null],[11,"encode","","Encode a packet",6,null],[11,"has_extra","","",6,null],[11,"has_key","","",6,null],[11,"has_body","","",6,null],[11,"get_extra","","",6,null],[11,"get_key","","",6,null],[11,"get_body","","",6,null],[11,"get_vbucket_id","","",6,null],[0,"response","memcached_bpr","ResponseHeaders/Packets",null,null],[3,"ResHeader","memcached_bpr::response","Memcached Response Packet Header",null,null],[3,"Response","","Memcached Response Packet",null,null],[5,"parse_res_header","","",null,null],[5,"parse_request","","",null,null],[11,"clone","","",7,null],[11,"fmt","","",7,null],[11,"eq","","",7,null],[11,"ne","","",7,null],[11,"get_opcode","","",7,null],[11,"get_keylen","","",7,null],[11,"get_extralen","","",7,null],[11,"get_bodylen","","",7,null],[11,"get_opaque","","",7,null],[11,"get_cas","","",7,null],[11,"status","","",7,null],[11,"encode","","",7,null],[11,"clone","","",8,null],[11,"fmt","","",8,null],[11,"status","","",8,null],[11,"get_opcode","","",8,null],[11,"get_keylen","","",8,null],[11,"get_extralen","","",8,null],[11,"get_bodylen","","",8,null],[11,"get_opaque","","",8,null],[11,"get_cas","","",8,null],[11,"encode","","Encode a packet",8,null],[11,"has_extra","","",8,null],[11,"has_key","","",8,null],[11,"has_body","","",8,null],[11,"get_extra","","",8,null],[11,"get_key","","",8,null],[11,"get_body","","",8,null],[8,"ResponseStatus","memcached_bpr","Trait for handling packets which can hold status",null,null],[10,"status","","check&#39;s status field.",9,null],[8,"Encoding","","Trait for encoding the value into a packet",null,null],[10,"encode","","Simple method to write the internal\ndata into a buffer",10,null],[8,"Op","","Every valid packet has an OpCode",null,null],[10,"get_opcode","","",11,null],[8,"PacketVal","","Values encoded within Memcached packets",null,null],[10,"get_keylen","","",12,null],[10,"get_extralen","","",12,null],[10,"get_bodylen","","",12,null],[10,"get_opaque","","",12,null],[10,"get_cas","","",12,null],[11,"total_len","","The total length of the packet",12,null],[8,"Packet","","Trait for all memcached packets",null,null],[10,"has_extra","","",13,null],[10,"has_key","","",13,null],[10,"has_body","","",13,null],[10,"get_extra","","",13,null],[10,"get_key","","",13,null],[10,"get_body","","",13,null],[11,"map_err","","Maps a `IResult&lt;I, O, E&gt;` to `IResult&lt;I, O, N&gt;` by appling a function\nto a contained `Error` value, leaving `Done` and `Incomplete` value\nuntouched.",0,null],[11,"unwrap_err","","Unwrap the contained `Error(E)` value, or panic if the `IResult` is not\n`Error`.",0,null],[11,"to_full_result","","Convert the IResult to a std::result::Result",0,null],[11,"to_result","","Convert the IResult to a std::result::Result",0,null],[11,"is_done","","",0,null],[11,"is_err","","",0,null],[11,"is_incomplete","","",0,null],[11,"map","","Maps a `IResult&lt;I, O, E&gt;` to `IResult&lt;I, N, E&gt;` by appling a function\nto a contained `Done` value, leaving `Error` and `Incomplete` value\nuntouched.",0,null],[11,"map_inc","","Maps a `IResult&lt;I, O, E&gt;` to `IResult&lt;I, O, E&gt;` by appling a function\nto a contained `Incomplete` value, leaving `Done` and `Error` value\nuntouched.",0,null],[11,"unwrap","","Unwrap the contained `Done(I, O)` value, or panic if the `IResult` is not\n`Done`.",0,null],[11,"unwrap_inc","","Unwrap the contained `Incomplete(n)` value, or panic if the `IResult` is not\n`Incomplete`.",0,null],[11,"description","","",2,null],[11,"eq","","",2,null],[11,"ne","","",2,null],[11,"eq","","",1,null],[11,"ne","","",1,null],[11,"eq","","",0,null],[11,"ne","","",0,null],[11,"fmt","","",2,null],[11,"fmt","","",1,null],[11,"fmt","","",0,null],[11,"fmt","","",2,null],[11,"output","","",0,null],[11,"output","","",0,null],[11,"output","","",0,null],[11,"clone","","",2,null],[11,"clone","","",1,null],[11,"clone","","",0,null],[11,"remaining_input","","",0,null],[11,"remaining_input","","",0,null],[11,"remaining_input","","",0,null],[11,"hash","","",2,null],[11,"is_known","","",1,null],[11,"map","","Maps a `Needed` to `Needed` by appling a function to a contained `Size` value.",1,null],[11,"description","","",2,null]],"paths":[[4,"IResult"],[4,"Needed"],[4,"ErrorKind"],[4,"OpCode"],[4,"StatusField"],[3,"ReqHeader"],[3,"Request"],[3,"ResHeader"],[3,"Response"],[8,"ResponseStatus"],[8,"Encoding"],[8,"Op"],[8,"PacketVal"],[8,"Packet"]]};
initSearch(searchIndex);