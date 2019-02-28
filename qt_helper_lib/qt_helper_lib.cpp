#include "qt_helper_lib.h"


const char* number_to_cstr(int i)
{
	return QString::number(i, 10).toUtf8().constData();
}

const char* qstring_to_cstr(QString qstr)
{
	return qstr.toUtf8().constData();
}

const char* qstringp_to_cstr(QString* qstr)
{
	return qstr->toUtf8().constData();
}

const char* stdstring_to_cstr(std::string str)
{
	return str.c_str();
}

const char* stdstringp_to_cstr(std::string* str)
{
	return str->c_str();
}
