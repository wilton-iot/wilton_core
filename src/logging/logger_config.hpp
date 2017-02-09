/* 
 * File:   logger_config.hpp
 * Author: alex
 *
 * Created on May 10, 2016, 8:01 PM
 */

#ifndef WILTON_LOGGING_LOGGER_CONFIG_HPP
#define	WILTON_LOGGING_LOGGER_CONFIG_HPP

#include <string>

#include "staticlib/config.hpp"
#include "staticlib/serialization.hpp"

#include "common/wilton_internal_exception.hpp"
#include "common/utils.hpp"

namespace wilton {
namespace logging {

class logger_config {
public:
    std::string name = "";
    std::string level = "";

    logger_config(const logger_config&) = delete;

    logger_config& operator=(const logger_config&) = delete;

    logger_config(logger_config&& other) :
    name(std::move(other.name)),
    level(std::move(other.level)) { }

    logger_config& operator=(logger_config&& other) {
        this->name = std::move(other.name);
        this->level = std::move(other.level);
        return *this;
    }

    logger_config() { }

    logger_config(const staticlib::serialization::json_value& json) {
        namespace ss = staticlib::serialization;
        for (const ss::json_field& fi : json.as_object()) {
            auto& fname = fi.name();
            if ("name" == fname) {
                this->name = common::get_json_string(fi);
            } else if ("level" == fname) {
                this->level = common::get_json_string(fi);
            } else {
                throw common::wilton_internal_exception(TRACEMSG("Unknown 'logging.loggers' field: [" + fname + "]"));
            }
        }
        if (0 == name.length()) throw common::wilton_internal_exception(TRACEMSG(
                "Invalid 'logging.loggers.name' field: []"));
        if (0 == level.length()) throw common::wilton_internal_exception(TRACEMSG(
                "Invalid 'logging.loggers.level' field: []"));
    }

    staticlib::serialization::json_value to_json() const {
        return {
            {"name", name},
            {"level", level}
        };
    }
};

} // namepspace
}

#endif	/* WILTON_LOGGING_LOGGER_CONFIG_HPP */
