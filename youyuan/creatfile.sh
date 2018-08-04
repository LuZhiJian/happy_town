#!/bin/sh
echo -n "Enter a file path: (cd 文件夹)"
read file
cd './src'
if [ -d "$file" ] ; then
  cd $file
  echo -n "Enter a file name: (myName)"
  read name
  if [ ! -d "$name" ] ; then
    mkdir $name
    cd $name
    touch "$name.vue"
    echo "<template>\n\t<div class=\"$name-wrapper\">\n\n\t</div>\n</template>\n<script>\nimport $name from './$name.es6'\nexport default $name\n</script>\n<style src=\"./$name.scss\" lang=\"scss\"></style>" >> "$name.vue"
    touch "$name.scss"
    echo ".$name-wrapper {\n\n}" >> "$name.scss"
    touch "$name.es6"
    echo "export default {\n\tname: '$name',\n\tcomponents: {\n\t},\n\tdata () {\n\t\treturn {\n\t\t}\n\t},\n\tmounted() {\n\t},\n\tmethods: {\n\t}\n}" >> "$name.es6"
    touch "index.js"
    echo "import $name from './$name.vue'\nexport default $name" >> "index.js"
    echo "创建成功！"
  else
    echo "文件名已存在！！！"
  fi
else
  echo "没有此文件夹！！！"
fi
# echo -n "Enter a upper file name: (MyName)"
# read UpperName
