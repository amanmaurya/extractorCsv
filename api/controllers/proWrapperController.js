var fs = require('fs');
var request = require('request');
var xml = require('xml');
var jsonexport = require('jsonexport');
var format = require('date-format')
var csv = require("csvtojson");




var wrapper = {


    createCSV: function(req, res, next) {




        var requestPromise = function(config) {
            return new Promise(function(resolve, reject) {
                request({
                    url: config.url,
                    method: config.method,
                    headers: config.headers,
                    json: true, // <--Very important!!!
                    body: config.json
                }, function(error, response, body) {
                    if (error) {
                        reject(error)
                    }
                    resolve(body)
                })
            });
        };


        var token;
        var csvArray = [];


        var getTokenConfig = {};
        getTokenConfig.url = 'https://qa.channelplay.in/data/token';
        getTokenConfig.method = 'POST';
        getTokenConfig.headers = {
            'cache-control': 'no-cache',
            password: 'Orient-Data@2018',
            'content-type': 'application/json',
            projectid: '162',
            username: 'orient@channelplay'
        }

        getTokenConfig.json = '';

        requestPromise(getTokenConfig)

            .then(function(data) {
                console.log('Token', data);
                token = data;

                var getUserConfig = {};
                getUserConfig.url = 'https://qa.channelplay.in/data/user';
                getUserConfig.method = 'POST';
                getUserConfig.headers = {
                    'cache-control': 'no-cache',
                    password: 'Orient-Data@2018',
                    'content-type': 'application/json',
                    projectid: '162',
                    username: 'orient@channelplay',
                    token: token
                }


                getUserConfig.json = {

                };
                getUserConfig.json.startDate = req.query.startdate || "2018-06-08";
                getUserConfig.json.endDate = req.query.enddate || "2018-06-08";
                return requestPromise(getUserConfig);

            })

            .then(function(data) {
                console.log('User', data);

                var csvArrayObject = {};
                csvArrayObject.user = data;
                csvArray.push(csvArrayObject);
                csvArrayObject = {};

                var getCityConfig = {};
                getCityConfig.url = 'https://qa.channelplay.in/data/city';
                getCityConfig.method = 'POST';
                getCityConfig.headers = {
                    'cache-control': 'no-cache',
                    password: 'Orient-Data@2018',
                    'content-type': 'application/json',
                    projectid: '162',
                    username: 'orient@channelplay',
                    token: token
                }


                getCityConfig.json = {

                };
                //getUserConfig.json.startDate=req.query.startdate || "2018-06-08";
                //getUserConfig.json.endDate=req.query.enddate || "2018-06-08";
                return requestPromise(getCityConfig);

            })

            .then(function(data) {
                console.log('City', data);

                var csvArrayObject = {};
                csvArrayObject.city = data;
                csvArray.push(csvArrayObject);
                csvArrayObject = {};

                var getStateConfig = {};
                getStateConfig.url = 'https://qa.channelplay.in/data/state';
                getStateConfig.method = 'POST';
                getStateConfig.headers = {
                    'cache-control': 'no-cache',
                    password: 'Orient-Data@2018',
                    'content-type': 'application/json',
                    projectid: '162',
                    username: 'orient@channelplay',
                    token: token
                }


                getStateConfig.json = {

                };
                //getUserConfig.json.startDate=req.query.startdate || "2018-06-08";
                //getUserConfig.json.endDate=req.query.enddate || "2018-06-08";
                return requestPromise(getStateConfig);

            })

            .then(function(data) {
                console.log('State', data);

                var csvArrayObject = {};
                csvArrayObject.state = data;
                csvArray.push(csvArrayObject);
                csvArrayObject = {};

                var getCountryConfig = {};
                getCountryConfig.url = 'https://qa.channelplay.in/data/country';
                getCountryConfig.method = 'POST';
                getCountryConfig.headers = {
                    'cache-control': 'no-cache',
                    password: 'Orient-Data@2018',
                    'content-type': 'application/json',
                    projectid: '162',
                    username: 'orient@channelplay',
                    token: token
                }


                getCountryConfig.json = {

                };
                //getUserConfig.json.startDate=req.query.startdate || "2018-06-08";
                //getUserConfig.json.endDate=req.query.enddate || "2018-06-08";
                return requestPromise(getCountryConfig);

            })

            .then(function(data) {
                console.log('Country', data);

                var csvArrayObject = {};
                csvArrayObject.country = data;
                csvArray.push(csvArrayObject);
                csvArrayObject = {};

                var getStoreConfig = {};
                getStoreConfig.url = 'https://qa.channelplay.in/data/store';
                getStoreConfig.method = 'POST';
                getStoreConfig.headers = {
                    'cache-control': 'no-cache',
                    password: 'Orient-Data@2018',
                    'content-type': 'application/json',
                    projectid: '162',
                    username: 'orient@channelplay',
                    token: token
                }


                getStoreConfig.json = {

                };
                getStoreConfig.json.startDate = req.query.startdate || "2018-06-08";
                getStoreConfig.json.endDate = req.query.enddate || "2018-06-08";
                return requestPromise(getStoreConfig);

            })

            .then(function(data) {
                console.log('Store', data);

                var csvArrayObject = {};
                csvArrayObject.store = data;
                csvArray.push(csvArrayObject);
                csvArrayObject = {};

                var getDistributorConfig = {};
                getDistributorConfig.url = 'https://qa.channelplay.in/data/distributor';
                getDistributorConfig.method = 'POST';
                getDistributorConfig.headers = {
                    'cache-control': 'no-cache',
                    password: 'Orient-Data@2018',
                    'content-type': 'application/json',
                    projectid: '162',
                    username: 'orient@channelplay',
                    token: token
                }


                getDistributorConfig.json = {

                };
                getDistributorConfig.json.startDate = req.query.startdate || "2018-03-16";
                getDistributorConfig.json.endDate = req.query.enddate || "2018-03-16";
                return requestPromise(getDistributorConfig);

            })

            .then(function(data) {
                console.log('distributor', data);

                var csvArrayObject = {};
                csvArrayObject.distributor = data;
                csvArray.push(csvArrayObject);
                csvArrayObject = {};

                var getAttendanceConfig = {};
                getAttendanceConfig.url = 'https://qa.channelplay.in/data/attendance';
                getAttendanceConfig.method = 'POST';
                getAttendanceConfig.headers = {
                    'cache-control': 'no-cache',
                    password: 'Orient-Data@2018',
                    'content-type': 'application/json',
                    projectid: '162',
                    username: 'orient@channelplay',
                    token: token
                }


                getAttendanceConfig.json = {

                };
                getAttendanceConfig.json.startDate = req.query.startdate || "2018-03-14";
                getAttendanceConfig.json.endDate = req.query.enddate || "2018-03-14";
                return requestPromise(getAttendanceConfig);

            })

            .then(function(data) {
                console.log('Attendence', data);
                var csvArrayObject = {};
                csvArrayObject.attendance = data;
                csvArray.push(csvArrayObject);
                csvArrayObject = {};

                var getStoreDistributorConfig = {};
                getStoreDistributorConfig.url = 'https://qa.channelplay.in/data/storedistributor';
                getStoreDistributorConfig.method = 'POST';
                getStoreDistributorConfig.headers = {
                    'cache-control': 'no-cache',
                    password: 'Orient-Data@2018',
                    'content-type': 'application/json',
                    projectid: '162',
                    username: 'orient@channelplay',
                    token: token
                }


                getStoreDistributorConfig.json = {

                };
                getStoreDistributorConfig.json.startDate = req.query.startdate || "2018-03-14";
                getStoreDistributorConfig.json.endDate = req.query.enddate || "2018-03-14";
                return requestPromise(getStoreDistributorConfig);


                // for(var i=0;i<csvArray.length;i++){

                //   for(x in csvArray[i]){

                //     jsonexport(csvArray[i][x].resonseObj,function(err, csv){
                //           if(err) return console.log(err);

                //           fs.writeFile('./'+x+'.csv', csv, function(err) {
                //             if (err) throw err;
                //             console.log(csv);
                //              console.log("CSV PROCESSED");
                //           });
                //           console.log(csv);
                //       });

                //   }
                // }
            })

            .then(function(data) {
                console.log('storedistributor', data);

                var csvArrayObject = {};
                csvArrayObject.storedistributor = data;
                csvArray.push(csvArrayObject);
                csvArrayObject = {};

                var getMarketWorkingConfig = {};
                getMarketWorkingConfig.url = 'https://qa.channelplay.in/data/storedistributor';
                getMarketWorkingConfig.method = 'POST';
                getMarketWorkingConfig.headers = {
                    'cache-control': 'no-cache',
                    password: 'Orient-Data@2018',
                    'content-type': 'application/json',
                    projectid: '162',
                    username: 'orient@channelplay',
                    token: token
                }


                getMarketWorkingConfig.json = {

                };
                getMarketWorkingConfig.json.startDate = req.query.startdate || "2018-03-14";
                getMarketWorkingConfig.json.endDate = req.query.enddate || "2018-03-14";
                return requestPromise(getMarketWorkingConfig);

            })

            .then(function(data) {
                console.log('MarketWorking', data);

                var csvArrayObject = {};
                csvArrayObject.MarketWorking = data;
                csvArray.push(csvArrayObject);
                csvArrayObject = {};

                console.log('JOB ENDS HERE');

                for (var i = 0; i < csvArray.length; i++) {

                    for (x in csvArray[i]) {

                        jsonexport(csvArray[i][x].resonseObj, function(err, csv) {
                            if (err) return console.log(err);

                            fs.writeFile('./csv/' + x + '-'+format.asString('yyyy-MM-dd',new Date())+'.csv', csv, function(err) {
                                if (err) throw err;
                                console.log(csv);
                                console.log("ALL CSV HAS BEEN PROCESSED");
                            });
                            console.log(csv);
                        });

                    }
                }
            })


            .then(function(data) {
                console.log('ALL SV HAS BEEN CREATED', data);


            })

            .catch(function(err) {
                console.log(err);
            });




    },


    proTemplateId: function(req, res, next) {

        var username = 'Truecover';
        if (!req.body.insurer_name && !req.body.policy_type) {
            var message = "insurer_name/policy_type is missing";
            return res.status(400).send(message);
        }

        var template_name = req.body.insurer_name + req.body.policy_type + username;
        var myJSONObject = {};
        myJSONObject.name = template_name;
        request({
            url: "http://192.168.1.54:8008/hyp/fetch/templateId?temp_token=123456789",
            method: "POST",
            json: true,
            body: myJSONObject
        }, function(error, response, body) {
            console.log('body', body);
            if (error || body.length == 0) {
                var message = "Template Not Found";
                return res.status(400).send(message);
            } else {
                req.body.template_id = body[0]._id;
                next();
            }
        });

    },



    proWrapper: function(req, res, next) {



        console.log('***************template_id', req.body, req.files);

        var options = {
            method: 'POST',
            url: 'http://192.168.1.54:8008/hyp/process/template',
            qs: {
                temp_token: '123456789'
            },
            headers: {
                'postman-token': 'e3c595de-d960-e1d8-9904-dc28b3a9a2cb',
                'cache-control': 'no-cache',
                'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
            },
            formData: {
                template_id: req.body.template_id,
                imgUploader1: fs.createReadStream(req.files[0].path || __dirname + '/uploads/1531916887739-Apollo Health.pdf')
            }
        };




        request(options, function(error, response, body) {
            if (error) throw new Error(error);

            var body2 = JSON.parse(body);
            console.log(body2.fileid)

            var myJSONObject = {};
            myJSONObject.file_id = body2.fileid;
            request({
                url: "http://192.168.1.54:8008/hyp/process/getsingledata?temp_token=123456789",
                method: "POST",
                json: true, // <--Very important!!!
                body: myJSONObject
            }, function(error, response, body) {
                console.log(body2);

                //res.set('Content-Type', 'text/xml');
                //es.send(xml(body2));

                var o2x = require('object-to-xml');
                //res.json(body);
                var presentCount = 0;
                var totalCount = 0;
                for (var i = 0; i < body[0].data.length; i++) {
                    for (var j = 0; j < body[0].data[i].file_data.length; j++) {
                        if (body[0].data[i].file_data[j].predicted_value) {
                            presentCount = presentCount + 1;
                        }
                        totalCount = totalCount + 1;
                    }
                }

                console.log(presentCount, totalCount);
                body[0].recall_score = (presentCount / totalCount) * 100;


                res.set('Content-Type', 'text/xml');
                res.send(o2x({
                    '?xml version="1.0" encoding="utf-8"?': null,
                    prodata: {
                        data: body
                    }
                }));
            });


        });
    }
}




module.exports = wrapper;