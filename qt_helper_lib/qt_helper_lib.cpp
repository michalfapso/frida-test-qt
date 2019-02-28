#include "qt_helper_lib.h"


const char* number_to_cstr(int i)
{
	return QString::number(i, 10).toUtf8().constData();
}

const char* qstring_to_cstr(QString qstr)
{
	return qstr.toLocal8Bit().constData();
}

qt_helper_lib_ByteArray qstringp_to_bytearray(QString* qstr)
{
	qt_helper_lib_ByteArray out;
	//return qstr->toLocal8Bit().constData();
	QByteArray ba = qstr->toUtf8();
	out.size = ba.size();
	out.data = ba.constData();
	return out;
}
unsigned int qt_helper_lib_ByteArray_get_size(qt_helper_lib_ByteArray* ba)
{
	return ba->size;
}
const char*  qt_helper_lib_ByteArray_get_data(qt_helper_lib_ByteArray* ba)
{
	return ba->data;
}
unsigned int qstringp_to_buffer(QString* qstr, char* buffer, unsigned int bufferSize)
{
	QByteArray ba = qstr->toUtf8();
	const char* ba_data = ba.constData();
	size_t i_end = std::min(bufferSize, (unsigned int)ba.size());
	for (size_t i=0; i<i_end; i++) {
		*buffer++ = *ba_data++;
	}
	if (i_end < bufferSize) {
		buffer[i_end] = '\0';
	}
	return ba.size();
}

const char* qstringp_to_cstr(QString* qstr)
{
	//return qstr->toLocal8Bit().constData();
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
