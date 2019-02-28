#include <QCoreApplication>
#include <iostream>
//#include "qt_helper_lib.h"

#define DBG(msg) std::cerr<<__LINE__<<"> "<<msg<<std::endl

int main(int argc, char *argv[])
{
	DBG(1);
	QCoreApplication a(argc, argv);
	DBG(2);
//	QString qstr1 = number_to_str(1234);
	DBG(2.1);
	QString qstr2 = QString::number(1234, 10);
	DBG(2.2);
	QString qstr = "abc";
	DBG(3);
	qstr.append("def");
	DBG(4);
	QByteArray qba = qstr.toUtf8();
	DBG(5);
	char* cstr = qba.data();
	DBG(6<<" "<<cstr);
	if (qstr == qstr2) {
		DBG("equal");
	} else {
		DBG("not equal");
	}
	
	DBG(7);
	if (qstr == QString("abcdef")) {
		DBG("equal");
	} else {
		DBG("not equal");
	}
	
	//return a.exec();
}
