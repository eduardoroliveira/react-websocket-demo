@echo off

IF "%1" == "1" (
    copy data\just-lion.json data.json
) ELSE IF "%1" == "2" (
    copy data\ant-eagle.json data.json
) ELSE IF "%1" == "3" (
    copy data\three-animals.json data.json
) ELSE (
    echo "usage: change-data.cmd [1|2|3]"
)